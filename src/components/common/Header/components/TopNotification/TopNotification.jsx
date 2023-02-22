import React from "react";
import { Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const TopNotification = () => {
  const navigate = useNavigate();

  const {
    user: { seen_notifications },
  } = useAuthContext();

  const handleClick = () => {
    navigate("/notifications");
  };

  return (
    <>
      <IconButton
        size="medium"
        aria-label={`Mostrando ${seen_notifications} notificaciones nuevas`}
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={seen_notifications} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default TopNotification;
