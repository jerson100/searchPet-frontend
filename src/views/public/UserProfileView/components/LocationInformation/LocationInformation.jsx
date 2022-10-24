import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const LocationInformation = ({ location }) => {
  if (!location?.latitud || !location?.longitud) return null;
  const { latitud, longitud } = location;
  return (
    <MapContainer
      center={[latitud, longitud]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: "200px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default LocationInformation;
