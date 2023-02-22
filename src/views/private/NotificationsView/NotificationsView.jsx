import { Container } from "@mui/material";
import React from "react";
import Notifications from "../../../components/common/Notifications";

const NotificationsView = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Notifications />
    </Container>
  );
};

export default NotificationsView;
