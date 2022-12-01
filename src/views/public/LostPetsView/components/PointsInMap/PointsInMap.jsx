import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { Box } from "@mui/system";
import Map from "../../../../../components/common/Map";
import useMyLocationGps from "../../../../../hooks/useMyLocationGps";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
/**
 * points = [{location:[lt, lng], description}]
 */
const PointsInMap = ({ points }) => {
  const { location } = useMyLocationGps();
  const { user } = useAuthContext();
  const iconPerson = new L.Icon({
    iconUrl:
      user?.user?.urlImageProfile ||
      "https://cdn-icons-png.flaticon.com/512/892/892781.png",
    iconRetinaUrl:
      user?.user?.urlImageProfile ||
      "https://cdn-icons-png.flaticon.com/512/892/892781.png",
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon--current-user",
  });

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Map center={[-11.1167582, -77.3009863]}>
        <MapContent points={points} currentLocation={location} />
        {location && (
          <Marker position={[location.lat, location.lng]} icon={iconPerson}>
            <Popup>Estoy aquí</Popup>
          </Marker>
        )}
        {points.map(({ location, description, _id, icon }) => (
          <Marker position={location} key={_id} icon={icon} attribution="s">
            <Popup>{description}</Popup>
          </Marker>
        ))}
      </Map>
    </Box>
  );
};

const MapContent = ({ points, currentLocation }) => {
  const map = useMap();
  useEffect(() => {
    let cb;
    if (map) {
      cb = ({
        popup: {
          _latlng: { lat, lng },
        },
      }) => {
        const el = document.getElementById(
          `${lat},${lng}`.replace(/[,\.+-]/gi, "")
        );
        el &&
          el.scrollIntoView({
            behavior: "smooth",
          });
      };
      map.on("popupopen", cb);
    }
    return () => {
      if (cb && map) {
        map.removeEventListener("popupopen", cb);
      }
    };
  }, [map]);
  useEffect(() => {
    if (currentLocation && points.length > 0 && map) {
      map.fitBounds([
        points.map(({ location: [lng, lt] }) => [lng, lt]),
        [currentLocation.lat, currentLocation.lng],
      ]);
    }
  }, [currentLocation, points, map]);
};

export default PointsInMap;
