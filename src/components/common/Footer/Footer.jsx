import { Paper, Container, Grid, Typography, Button } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import SocialList from "../SocialList";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Paper
      component="footer"
      sx={{ boxShadow: "none", padding: { xs: "1rem 0", md: "2rem 0" } }}
    >
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
            <Typography
              variant="h3"
              component="p"
              marginBottom={2}
              display={{ xs: "none", md: "block" }}
            >
              SPet
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" flexWrap="wrap" gap={1}>
            <nav>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  display: "flex",
                  margin: "0",
                  padding: "0",
                  gap: "1rem",
                  flexWrap: "wrap;",
                  marginLeft: "-8px",
                }}
              >
                <li>
                  <Button to="/" component={Link}>
                    Home
                  </Button>
                </li>
                <li>
                  <Button to="/pets/lost" component={Link}>
                    Mascotas Perdidas
                  </Button>
                </li>
                <li>
                  <Button to="/we" component={Link}>
                    Nosotros
                  </Button>
                </li>
                <li>
                  <Button to="/we" component={Link}>
                    Visión
                  </Button>
                </li>
                <li>
                  <Button to="/we" component={Link}>
                    Ayuda
                  </Button>
                </li>
                <li>
                  <Button to="/team" component={Link}>
                    Team
                  </Button>
                </li>
              </Box>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default React.memo(Footer);
