import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Pet404 from "../../../assets/img/svg/pet404.svg";

const NotFound = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100%"
      flexGrow={1}
      padding="3rem 1rem"
      textAlign={"center"}
    >
      <Box
        component="img"
        mb={2}
        src={Pet404}
        width={{ xs: "200px", md: "300px" }}
        alt="pasando a la mascota"
      />
      <Typography variant="h3" component="p" mb={2}>
        404
      </Typography>
      <Typography variant="h4" component="h1" mb={2}>
        Estás navegando por lugares desconocidos
      </Typography>
      <Button LinkComponent={Link} to="/" variant="contained">
        Ir al inicio
      </Button>
    </Stack>
  );
};

export default NotFound;
