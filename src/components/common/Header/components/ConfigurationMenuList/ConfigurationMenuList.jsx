import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PetsIcon from "@mui/icons-material/Pets";

const ConfigurationMenuList = () => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="ul"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton component="li">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component="li">
        <ListItemIcon>
          <PetsIcon />
        </ListItemIcon>
        <ListItemText primary="Mascotas perdidas" />
      </ListItemButton>
      <ListItemButton component="li">
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Nosotros" />
      </ListItemButton>
      <ListItemButton component="li">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Equipo" />
      </ListItemButton>
    </List>
  );
};

export default ConfigurationMenuList;
