import { Paper, Container, Grid, Typography } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import SocialList from "../SocialList";

const Footer = () => {
  return (
    <Paper sx={{ boxShadow: "none", padding: { xs: "1rem 0", md: "2rem 0" } }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="p"
              marginBottom={2}
              fontWeight="bold"
            >
              SPet
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2}>
              Espacio en el que puedes ser y hacer feliz a las mascotas.
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2}>
              Espacio en el que puedes ser y hacer feliz a las mascotas.
            </Typography>
            <SocialList>
              <SocialList.Item
                to="https://www.google.com.pe"
                icon={<GithubIcon />}
              />
              <SocialList.Item
                to="https://www.google.com.pe"
                icon={<FacebookIcon />}
              />
              <SocialList.Item
                to="https://www.google.com.pe"
                icon={<TwitterIcon />}
              />
            </SocialList>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="p">
              SPet
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" component="p">
              SPet
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
