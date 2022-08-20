import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PetsIcon from "@mui/icons-material/Pets";

const MainMenuList = () => {
  return (
    <li>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="div"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton to="/" component={Link}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton to="/lostPet" component={Link}>
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="Mascotas perdidas" />
        </ListItemButton>
        <ListItemButton to="/we" component={Link}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Nosotros" />
        </ListItemButton>
        <ListItemButton to="/team" component={Link}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Equipo" />
        </ListItemButton>
      </List>
    </li>
  );
};

export default MainMenuList;
