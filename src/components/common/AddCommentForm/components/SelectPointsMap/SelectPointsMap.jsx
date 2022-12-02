import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap, Polyline } from "react-leaflet";
import L from "leaflet";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import useMyLocationGps from "../../../../../hooks/useMyLocationGps";
import Map from "../../../Map/Map";

const SelectPointsMap = ({ points, setPoints }) => {
  return (
    <Map center={[-11.1167582, -77.3009863]} zoom={9}>
      <MapContent points={points} setPoints={setPoints} />
    </Map>
  );
};

const MapContent = ({ points, setPoints }) => {
  const { location } = useMyLocationGps();
  const { user } = useAuthContext();
  const map = useMap();
  const iconCurremtPerson = useMemo(
    () =>
      new L.Icon({
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
      }),
    [user]
  );
  const iconAnimalMark = useMemo(
    () =>
      new L.Icon({
        iconUrl: "/animalMark.png",
        iconRetinaUrl: "/animalMark.png",
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(40, 40),
      }),
    []
  );
  useEffect(() => {
    if (map && location) {
      map.fitBounds([[location.lat, location.lng]], {
        animate: true,
      });
    }
  }, [map, location]);

  useEffect(() => {
    if (points.length > 2 && map) {
      map.fitBounds(points);
    }
  }, [points, map]);

  useEffect(() => {
    let cb = null;
    if (map) {
      cb = ({ latlng: { lat, lng } }) => {
        setPoints((prev) => [...prev, [lat, lng]]);
      };
      map.addEventListener("click", cb);
      return () => {
        if (cb) {
          map.removeEventListener("click", cb);
        }
      };
    }
  }, [map]);

  return (
    <>
      {location && (
        <Marker
          position={[location.lat, location.lng]}
          icon={iconCurremtPerson}
        >
          <Popup>Estoy aquí</Popup>
        </Marker>
      )}
      {points &&
        points.map((p, index) => (
          <Marker key={index} position={p} icon={iconAnimalMark}></Marker>
        ))}
      <Polyline positions={points} />
    </>
  );
};

export default SelectPointsMap;
