import { Paper, Typography } from "@mui/material";
import React from "react";

const PetList = () => {
  return (
    <Paper sx={{ padding: 2, minHeight: "200px" }}>
      <Typography variant="h4" component="h1" mb={2}>
        Lista de mascotas
      </Typography>
      <Typography variant="body" component="p">
        No se encontraron mascotas
      </Typography>
    </Paper>
  );
};

export default PetList;
