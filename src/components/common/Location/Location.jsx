import React, { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useMapEvents, useMap } from "react-leaflet/hooks";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
// import "react-leaflet-fullscreen";
// import "react-leaflet-fullscreen/dist/styles.css";
import Box from "@mui/material/Box";

const Location = ({ location, setlocation, name, setFieldValue }) => {
  return (
    <Box
      marginBottom={"1rem"}
      display="flex"
      flexDirection={"column"}
      height="100%"
    >
      <Typography variant="h4" component="h2" marginBottom={2}>
        Tu ubicación
      </Typography>
      <Typography variant="body1" component="p" marginBottom={"1rem"}>
        Pulse click en alguna parte del mapa para que otras personas puedan
        ponerse en contacto contigo, si tiene la ubicación activada en su equipo
        se le mostrará un punto como referencia
      </Typography>
      <Alert
        variant="outlined"
        severity="warning"
        style={{ marginBottom: "1rem" }}
      >
        No seleccione una ubicación muy cercana a su hogar
      </Alert>
      <Box height={"300px"} flexGrow={1} mb={2}>
        <MapContainer
          center={[-11.1167582, -77.3009863]}
          zoom={4}
          scrollWheelZoom
          style={{ height: "100%" }}
          fullscreenControl
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map
            location={location}
            setlocation={setlocation}
            name={name}
            setFieldValue={setFieldValue}
          />
          <MyLocation />
        </MapContainer>
        {/* )} */}
      </Box>
    </Box>
  );
};

const MyLocation = () => {
  const [myLocation, setmyLocation] = useState(null);
  const map = useMap();

  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setmyLocation([latitude, longitude]);
        map.flyTo([latitude, longitude], 9);
      },
      (e) => {
        console.log("error de localización");
      }
    );
  }, [map]);
  return (
    myLocation && (
      <Marker position={myLocation}>
        <Popup>Usted está aquí bb</Popup>
      </Marker>
    )
  );
};

const Map = ({ location, setlocation, name, setFieldValue }) => {
  useMapEvents({
    click(e) {
      //   map.locate();
      if (e.latlng) {
        if (setlocation) {
          setlocation([e.latlng.lat, e.latlng.lng]);
        } else if (setFieldValue) {
          setFieldValue(name, [e.latlng.lat, e.latlng.lng]);
        }
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
        <>
          <Marker position={location}>
            <Popup>Usted seleccionó esta posición</Popup>
          </Marker>
        </>
      )}
    </>
  );
};

export default React.memo(Location);
