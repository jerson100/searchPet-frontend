import { Avatar, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useNotification from "../../../hooks/useGetNotification";

const UserNotification = ({ handleClose }) => {
  const { notifications, loading, error } = useNotification();
  const navigate = useNavigate();
  const handleNavigation = (to) => {
    navigate(to);
    handleClose && handleClose();
  };

  if (error) {
    return (
      <MenuItem key={i} name={i} onClick={handleClose}>
        <Typography paragraph>Ocurrió un error</Typography>
      </MenuItem>
    );
  }
  return (
    <>
      {notifications?.map((n, i) => (
        <MenuItem key={i} name={i} onClick={(e) => handleNavigation(n.path)}>
          <Box sx={{ display: "flex" }} gap={"1rem"}>
            <Avatar alt={n.from.username} src={n.from.urlImageProfile} />
            <Box>
              <Typography whiteSpace={"break-spaces"}>{n.content}</Typography>
            </Box>
          </Box>
        </MenuItem>
      ))}
      <MenuItem
        onClick={() => {
          navigate("/notifications");
        }}
        sx={{ justifyContent: "center" }}
      >
        <Typography whiteSpace={"break-spaces"}>
          Ver todas las notificaciones
        </Typography>
      </MenuItem>
    </>
  );
};

export default UserNotification;
