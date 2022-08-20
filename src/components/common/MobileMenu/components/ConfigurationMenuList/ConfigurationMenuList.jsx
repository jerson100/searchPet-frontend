import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import Divider from "@mui/material/Divider";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

const ConfigurationMenuList = () => {
  const { user } = useAuthContext();
  if (!user?.user) return null;
  return (
    <>
      <Divider component="li" />
      <li>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="div"
          aria-labelledby="nested-list-subheader-cf"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader-cf">
              Configuración
            </ListSubheader>
          }
        >
          <ListItemButton to={`/profile/${user.user._id}`} component={Link}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>
          <ListItemButton to="/configuration/reset-password" component={Link}>
            <ListItemIcon>
              <PasswordIcon />
            </ListItemIcon>
            <ListItemText primary="Cambiar contraseña" />
          </ListItemButton>
        </List>
      </li>
    </>
  );
};

export default ConfigurationMenuList;
