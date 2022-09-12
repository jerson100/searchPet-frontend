import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import PetsItemDesktopMenu from "../PetsItemDesktopMenu";

const LeftMenu = () => {
  return (
    <Box component="nav" display={{ xs: "none", md: "flex" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          listStyle: "none",
          margin: 0,
          alignItems: "center",
        }}
        component="ul"
      >
        <li>
          <Button to="/" color="inherit" LinkComponent={Link}>
            Home
          </Button>
        </li>
        <li>
          <PetsItemDesktopMenu />
        </li>
        <li>
          <Button to="/we" color="inherit" LinkComponent={Link}>
            Nosotros
          </Button>
        </li>
        <li>
          <Button to="/team" color="inherit" LinkComponent={Link}>
            Equipo
          </Button>
        </li>
        <li>
          <Button to="/team" color="inherit" LinkComponent={Link}>
            Visión
          </Button>
        </li>
      </Stack>
    </Box>
  );
};

export default LeftMenu;
