import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useMapEvents } from "react-leaflet/hooks";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { FullscreenControl } from "react-leaflet-fullscreen";
import Box from "@mui/material/Box";
import "react-leaflet-fullscreen/dist/styles.css";

const Location = ({ location, setlocation }) => {
  return (
    <Box marginBottom={"1rem"}>
      <Typography variant="h6" component="p" marginBottom={".5rem"}>
        Tu ubicación
      </Typography>
      <Typography variant="body1" component="p" marginBottom={"1rem"}>
        Pulse click en alguna parte del mapa para que otras personas puedan
        ponerse en contacto contigo.
      </Typography>
      <Alert
        variant="outlined"
        severity="warning"
        style={{ marginBottom: "1rem" }}
      >
        No seleccione una ubicación muy cercana a su hogar
      </Alert>
      <Box height={"300px"}>
        <MapContainer
          center={[-12.062490398004638, -437.0360469818115]}
          zoom={4}
          scrollWheelZoom
          style={{ height: "100%" }}
          fullscreenControl
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map location={location} setlocation={setlocation} />
        </MapContainer>
        {/* )} */}
      </Box>
    </Box>
  );
};

const Map = ({ location, setlocation }) => {
  const map = useMapEvents({
    click(e) {
      //   map.locate();
      if (e.latlng) {
        setlocation([e.latlng.lat, e.latlng.lng]);
      }
    },
    // locationfound(e) {
    //   //   setPosition(e.latlng);
    //   //   map.flyTo(e.latlng, map.getZoom());
    // },
  });
  return (
    <>
      {location && (
        <Marker position={location}>
          <Popup>Usted está aquí bb</Popup>
        </Marker>
      )}
    </>
  );
};

export default React.memo(Location);
