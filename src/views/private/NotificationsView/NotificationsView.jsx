import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import Notifications from "../../../components/common/Notifications";
import { useAuthContext } from "../../../hooks/useAuthContext";

const NotificationsView = () => {
  const { resetSeenNotifications } = useAuthContext();

  useEffect(() => {
    resetSeenNotifications();
  }, [resetSeenNotifications]);

  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Notifications />
    </Container>
  );
};

export default NotificationsView;
