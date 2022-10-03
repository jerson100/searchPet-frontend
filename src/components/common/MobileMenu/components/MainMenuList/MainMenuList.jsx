import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PetsIcon from "@mui/icons-material/Pets";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlagIcon from "@mui/icons-material/Flag";
import AddPetIcon from "@mui/icons-material/Add";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

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
        <PetListItem />
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

const PetListItem = () => {
  const [openPet, setOpenPets] = useState(false);
  const { user } = useAuthContext();

  const handleClick = () => {
    setOpenPets((prev) => !prev);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PetsIcon />
        </ListItemIcon>
        <ListItemText primary="Mascotas" />
        {openPet ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPet} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton to="/pets" component={Link} sx={{ pl: 4 }}>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary="Todas las mascotas" />
          </ListItemButton>
          <ListItemButton to="/pets/lost" component={Link} sx={{ pl: 4 }}>
            <ListItemIcon>
              <FlagIcon />
            </ListItemIcon>
            <ListItemText primary="Mascotas perdidas" />
          </ListItemButton>
          {user && (
            <>
              <ListItemButton to="/pets/add" component={Link} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AddPetIcon />
                </ListItemIcon>
                <ListItemText primary="Agregar mascota" />
              </ListItemButton>
              <ListItemButton
                to="/pets/lost/add"
                component={Link}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <AddPetIcon />
                </ListItemIcon>
                <ListItemText primary="Agregar mascotas perdidas" />
              </ListItemButton>
            </>
          )}
        </List>
      </Collapse>
    </>
  );
};

export default MainMenuList;
