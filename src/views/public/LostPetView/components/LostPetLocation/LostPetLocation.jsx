import React, { useMemo } from "react";
import { Box } from "@mui/material";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "./lostPetLocation.css";
import "leaflet-routing-machine";
import "lrm-graphhopper";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import useMyLocationGps from "../../../../../hooks/useMyLocationGps";
import Map from "../../../../../components/common/Map";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

const LostPetLocation = ({ position, image }) => {
  //   const position = [51.505, -0.09];
  const { location } = useMyLocationGps();
  const { user } = useAuthContext();
  const iconPerson = new L.Icon({
    iconUrl:
      image ||
      "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
    iconRetinaUrl:
      image ||
      "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon",
  });

  const iconCurremtPerson = new L.Icon({
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

  const waypoints = useMemo(() => {
    const d = [];
    if (position) d.push(L.latLng(position[1], position[0]));
    if (location) d.push(L.latLng(location.lat, location.lng));
    return d.length > 1 ? d : null;
  }, [position, location]);

  return (
    <Box
      bgcolor={"background.paper"}
      color="black"
      border="solid 1px"
      borderColor={"divider"}
      height="100%"
      minHeight="600px"
    >
      <Map
        center={{
          lng: position[0],
          lat: position[1],
        }}
        zoom={9}
      >
        <Marker
          position={{
            lng: position[0],
            lat: position[1],
          }}
          icon={iconPerson}
        >
          <Popup>Por esta zona se perdió la mascota(as)</Popup>
        </Marker>
        {location && (
          <Marker
            position={[location.lat, location.lng]}
            icon={iconCurremtPerson}
          >
            <Popup>Estoy aquí</Popup>
          </Marker>
        )}
        <Map.Routing waypoints={waypoints} />
      </Map>
    </Box>
  );
};

export default LostPetLocation;
