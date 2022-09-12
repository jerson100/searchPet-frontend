import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

const links = [
  {
    name: "Ver mascotas",
    to: "/pets",
  },
  {
    name: "Mascotas perdidas",
    to: "/lostpets",
  },
];

const PetsItemDesktopMenu = () => {
  const [anchorElMenu, setAnchorElPet] = React.useState(null);
  const { user } = useAuthContext();

  const handleOpenPetMenu = (event) => {
    setAnchorElPet(event.currentTarget);
  };

  const handleClosePetMenu = (e) => {
    setAnchorElPet(null);
  };

  return (
    <div>
      <Button
        color="inherit"
        // onMouseOver={handleOpenUserMenu}
        // onMouseOut={handleCloseUserMenu}
        onClick={handleOpenPetMenu}
        // sx={{ p: 0 }}
      >
        Mascotas
      </Button>
      <Menu
        sx={{ mt: "45px" }}
        id="pets-menu-item"
        anchorEl={anchorElMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElMenu)}
        onClose={handleClosePetMenu}
      >
        {links.map(({ name, to }) => (
          <MenuItem
            component={Link}
            key={name}
            name={name}
            to={to}
            onClick={handleClosePetMenu}
          >
            <Typography textAlign="center">{name}</Typography>
          </MenuItem>
        ))}
        {user && (
          <MenuItem
            component={Link}
            key={"Agregar mascota"}
            name={"Agregar mascota"}
            to={"/my-pet/add"}
            onClick={handleClosePetMenu}
          >
            <Typography textAlign="center">Agregar mascota</Typography>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default PetsItemDesktopMenu;
