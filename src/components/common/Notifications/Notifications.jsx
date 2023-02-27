import { Box, Paper, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import notificationService from "../../../api/notification.service";
import { useAuthContext } from "../../../hooks/useAuthContext";
import useNotification from "../../../hooks/useGetNotification";
import Notification from "./components/Notification";

const Notifications = () => {
  const { notifications, loading, error } = useNotification();
  const userContext = useAuthContext();
  const navigate = useNavigate();

  const handleClick = useCallback(
    (to, idNotification) => {
      notificationService.seen({ idNotification });
      userContext.seenNotification({ idNotification });
      navigate(to);
    },
    [userContext.seenNotification]
  );
  return (
    <Box sx={{ maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
      {loading ? (
        <Typography>Cargando...</Typography>
      ) : error ? (
        <Typography>Ocurrió un error, intentelo más tarde</Typography>
      ) : !notifications.length ? (
        <Typography textAlign={"center"}>
          Aún no tiene notificaciones
        </Typography>
      ) : (
        <Paper
          component="ul"
          variant="elevation"
          sx={{
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {notifications?.map((n, i) => (
            <Notification
              content={n.content}
              path={n.path}
              urlImageProfile={n.from.urlImageProfile}
              username={n.from.username}
              seen={n.seen}
              handleClick={handleClick}
              key={n._id}
              idNotification={n._id}
              createdAt={n.createdAt}
            />
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default Notifications;
