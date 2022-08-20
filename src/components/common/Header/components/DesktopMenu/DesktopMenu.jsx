import { Box, Button } from "@mui/material";
import React from "react";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import ButtonAcceder from "../../../ButtonAcceder";
import UserLogued from "../UserLogued";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  const { user } = useAuthContext();

  return (
    <nav>
      <Box
        sx={{
          display: "flex",
          listStyle: "none",
          gap: 1,
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
          <Button to="/spets" color="inherit" LinkComponent={Link}>
            Mascotas
          </Button>
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
        <li>
          {!user?.user ? <ButtonAcceder isLogued={false} /> : <UserLogued />}
        </li>
      </Box>
    </nav>
  );
};

export default DesktopMenu;
