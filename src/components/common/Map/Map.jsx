import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({
  center,
  zoom,
  style = { width: "100%", height: "100%" },
  children,
  fullscreenControl = true,
  scrollWheelZoom = true,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      style={style}
      fullscreenControl={fullscreenControl}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

export default Map;
