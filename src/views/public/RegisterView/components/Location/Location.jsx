import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { FullscreenControl } from "react-leaflet-fullscreen";
import Box from "@mui/material/Box";
import Background from "./components/Background/Background";
import "react-leaflet-fullscreen/dist/styles.css";

const Location = () => {
  const [position, setposition] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setposition([position.coords.latitude, position.coords.longitude]);
        },
        function (error) {
          alert("Necesita habilitar la ubicación.");
        }
      );
    }
  }, []);

  return (
    <>
      <Box height={"300px"}>
        {!position ? (
          <Background />
        ) : (
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom
            style={{ height: "100%" }}
            fullscreenControl
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Map position={position} />
          </MapContainer>
        )}
      </Box>
    </>
  );
};

const Map = ({ position }) => {
  return !position ? null : (
    <Marker position={position}>
      <Popup>Usted está aquí bb</Popup>
    </Marker>
  );
};

export default React.memo(Location);
