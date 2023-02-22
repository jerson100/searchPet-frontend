import { Box, Paper } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useNotification from "../../../hooks/useGetNotification";
import Notification from "./components/Notification";

const Notifications = () => {
  const { notifications, loading } = useNotification();
  const navigate = useNavigate();
  const handleClick = useCallback((to) => {
    navigate(to);
  }, []);
  return (
    <Box sx={{ maxWidth: "540px", marginLeft: "auto", marginRight: "auto" }}>
      {loading ? (
        <p>Cargando...</p>
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
              key={i}
            />
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default Notifications;
