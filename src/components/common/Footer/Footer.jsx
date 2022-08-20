import { Paper, Container, Grid, Typography, Button } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import SocialList from "../SocialList";
import { Link } from "react-router-dom";

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
            <SocialList>
              <SocialList.Item
                href="https://github.com/jerson100"
                icon={<GithubIcon />}
              />
              <SocialList.Item
                href="https://www.facebook.com/jersonomar.ramirezortiz/"
                icon={<FacebookIcon />}
              />
              <SocialList.Item
                href="https://twitter.com/loveting100"
                icon={<TwitterIcon />}
              />
            </SocialList>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            justifyContent={{ md: "flex-end" }}
          >
            <Typography variant="h3" component="p">
              SPet
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" flexWrap="wrap" gap={1}>
            <Button to="/" component={Link}>
              Home
            </Button>
            <Button to="/lostPet" component={Link}>
              Mascotas Perdidas
            </Button>
            <Button to="/we" component={Link}>
              Nosotros
            </Button>
            <Button to="/we" component={Link}>
              Visión
            </Button>
            <Button to="/we" component={Link}>
              Ayuda
            </Button>
            <Button to="/team" component={Link}>
              Team
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default React.memo(Footer);
