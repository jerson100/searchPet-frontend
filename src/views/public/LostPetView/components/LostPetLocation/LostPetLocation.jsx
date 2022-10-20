import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
// import "react-leaflet-fullscreen";
// import "react-leaflet-fullscreen/dist/styles.css";
import "./lostPetLocation.css";
import "leaflet-routing-machine";
import "lrm-graphhopper";
import L from "leaflet";
import { useMap } from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import useMyLocationGps from "../../../../../hooks/useMyLocationGps";

const LostPetLocation = ({ position, image, zoom = 9, fullScreen = true }) => {
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
        fullscreenControl={fullScreen}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers position={position} image={image} />
      </MapContainer>
    </Box>
  );
};

const Markers = ({ position, image }) => {
  const { location } = useMyLocationGps();
  const map = useMap();
  const iconPerson = new L.Icon({
    iconUrl:
      image ||
      "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
    iconRetinaUrl:
      image ||
      "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
    // iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon",
  });
  useEffect(() => {
    if (!position || !location || !map) return;
    let routingControl = null;
    try {
      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(position.longitude, position.latitude),
          L.latLng(location.lat, location.lng),
        ],
        router: L.Routing.graphHopper("b5522516-4793-4bf8-87b0-ceae7ea84729"),
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        //   show: false,
        plan: false,
        lineOptions: {
          styles: [
            {
              color: "#1565c0",
              opacity: "0.7",
              weight: 8,
            },
          ],
        },
      }).addTo(map);
    } catch (e) {}
    return () => {
      if (map && routingControl) map.removeControl(routingControl);
    };
  }, [position, location, map]);
  return (
    <>
      <Marker
        position={{
          lng: position.latitude,
          lat: position.longitude,
        }}
        icon={iconPerson}
      >
        <Popup>Por esta zona se perdió la mascota(as)</Popup>
      </Marker>
    </>
  );
};

export default LostPetLocation;
