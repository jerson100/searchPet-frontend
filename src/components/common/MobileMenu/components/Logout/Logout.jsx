import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

const Logout = () => {
  const { user, logout } = useAuthContext();
  if (!user?.user) return null;
  return (
    <>
      <Divider component="li" />
      <ListItemButton component="li" onClick={logout} sx={{ mb: 6 }}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  );
};

export default Logout;
