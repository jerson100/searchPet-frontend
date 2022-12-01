import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "lrm-graphhopper";

import "./map.css";

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

const Routing = ({
  waypoints,
  config = {
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    plan: false,
    createMarker: function () {
      return null;
    },
    lineOptions: {
      styles: [
        {
          color: "#1565c0",
          opacity: "0.7",
          weight: 8,
        },
      ],
    },
  },
}) => {
  const map = useMap();
  useEffect(() => {
    if (!waypoints || !map) return;
    let routingControl = null;
    try {
      routingControl = L.Routing.control({
        waypoints: waypoints,
        router: L.Routing.graphHopper(import.meta.env.VITE_GRAPH_HOVER),
        ...config,
      }).addTo(map);
    } catch (e) {}
    return () => {
      if (map && routingControl) map.removeControl(routingControl);
    };
  }, [waypoints, map]);
};

Map.Routing = Routing;

export default Map;
