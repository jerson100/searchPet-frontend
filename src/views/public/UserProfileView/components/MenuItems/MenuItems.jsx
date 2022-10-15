import React from "react";
import { Link } from "react-router-dom";
import { ListItemIcon, MenuItem } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PetsIcon from "@mui/icons-material/Pets";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const MenuItems = () => {
  return (
    <>
      <MenuItem component={Link} to="activities">
        <ListItemIcon>
          <AutoGraphIcon fontSize="small" />
        </ListItemIcon>
        Actividad
      </MenuItem>
      <MenuItem component={Link} to="pets">
        <ListItemIcon>
          <PetsIcon fontSize="small" />
        </ListItemIcon>{" "}
        Mascotas
      </MenuItem>
      <MenuItem component={Link} to="lost-pets">
        <ListItemIcon>
          <ManageSearchIcon fontSize="small" to="lost-pets" />
        </ListItemIcon>{" "}
        Mascotas Perdidas
      </MenuItem>
    </>
  );
};

export default MenuItems;
