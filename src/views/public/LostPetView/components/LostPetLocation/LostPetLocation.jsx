import React from "react";
import { Box, css } from "@mui/material";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/dist/styles.css";
import { useEffect } from "react";
import { useState } from "react";
import "./lostPetLocation.css";
import L from "leaflet";

const LostPetLocation = ({ position, image, zoom = 9 }) => {
  const iconPerson = new L.Icon({
    iconUrl: image,
    iconRetinaUrl: image,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon",
  });

  //   const position = [51.505, -0.09];
  return (
    <Box
      bgcolor={"background.paper"}
      border="solid 1px"
      borderColor={"divider"}
      height="100%"
    >
      <MapContainer
        center={{
          lng: position.latitude,
          lat: position.longitude,
        }}
        zoom={zoom}
        scrollWheelZoom
        style={{ minHeight: "600px", height: "100%" }}
        fullscreenControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={{
            lng: position.latitude,
            lat: position.longitude,
          }}
          icon={iconPerson}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <MyLocationMarker />
      </MapContainer>
    </Box>
  );
};

const MyLocationMarker = () => {
  const [location, setlocation] = useState(null);

  useEffect(() => {
    const id = navigator.geolocation.watchPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setlocation({
          lat,
          lng,
        });
      },
      (e) => {
        console.log(e);
      },
      {
        enableHighAccuracy: true,
      }
    );
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []);

  return <>{location && <Marker position={location}></Marker>}</>;
};

export default LostPetLocation;
