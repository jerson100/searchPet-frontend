import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Background = () => {
  const handleClick = () => {
    alert("Necesita habilitar la ubicación");
  };
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      style={{ background: "black", height: "100%" }}
    >
      <Button variant="contained" onClick={handleClick}>
        Habilitar ubicación
      </Button>
    </Box>
  );
};

export default Background;
