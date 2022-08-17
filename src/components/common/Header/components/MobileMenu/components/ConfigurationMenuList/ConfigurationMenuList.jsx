import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import { useAuthContext } from "../../../../../../../hooks/useAuthContext";
import { Divider } from "@mui/material";

const ConfigurationMenuList = () => {
  const { user } = useAuthContext();
  if (!user?.user) return null;
  return (
    <>
      <Divider component="li" />
      <li>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="ul"
          aria-labelledby="nested-list-subheader-cf"
          subheader={
            <ListSubheader component="li" id="nested-list-subheader-cf">
              Configuración
            </ListSubheader>
          }
        >
          <ListItemButton component="li">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItemButton>
          <ListItemButton component="li">
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
