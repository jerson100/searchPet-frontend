import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Box } from "@mui/system";
/**
 * points = [{location:[lt, lng], description}]
 */
const PointsInMap = ({ points }) => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[-11.1167582, -77.3009863]}
        zoom={9}
        scrollWheelZoom
        style={{ height: "100%" }}
        fullscreenControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapContent points={points} />
        {points.map(({ location, description, _id, icon }) => (
          <Marker position={location} key={_id} icon={icon}>
            <Popup>{description}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

const MapContent = ({ points }) => {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      map.fitBounds(points.map(({ location: [lng, lt] }) => [lng, lt]));
    }
  }, [points, map]);
};

export default PointsInMap;
