import React from "react";
import Grid from "@mui/material/Grid";
import Functionality from "../../../../../components/common/Functionality";
import JeSection from "../../../../../components/common/JeSection";

import { ReactComponent as NotificationSVG } from "../../../../../assets/img/svg/notifications.svg";
import { ReactComponent as ChatSVG } from "../../../../../assets/img/svg/chat.svg";
import { ReactComponent as GpsSVG } from "../../../../../assets/img/svg/gps.svg";
import { Box, Paper, useTheme } from "@mui/material";

// import { ReactComponent as StarIcon } from './star.svg';

const Functionalitites = () => {
  //   const theme = useTheme();
  return (
    // <Paper
    //   variant={theme.palette.mode === "light" ? "outlined" : "elevation"}
    //   sx={{ mb: 2 }}
    //   component={Box}
    // >
    <JeSection backgroundColor="inherit">
      <JeSection.Title>Funcionalidades</JeSection.Title>
      <JeSection.Content>
        <Grid container spacing={8}>
          <Grid item xs={6} md={4}>
            <Functionality
              text="Chat en tiempo real"
              svg={ChatSVG}
              viewBox="0 0 609.98 593.41"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Functionality text="Notificaciones" svg={NotificationSVG} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Functionality text="Localización por gps" svg={GpsSVG} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Functionality
              text="Chat en tiempo real"
              svg={ChatSVG}
              viewBox="0 0 609.98 593.41"
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Functionality text="Notificaciones" svg={NotificationSVG} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Functionality text="Localización por gps" svg={GpsSVG} />
          </Grid>
        </Grid>
      </JeSection.Content>
    </JeSection>
    // </Paper>
  );
};

export default Functionalitites;
