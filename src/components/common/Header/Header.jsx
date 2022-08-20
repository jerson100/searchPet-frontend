import React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";

const Header = ({ setshowMenuMobile, matches }) => {
  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          borderBottom: "solid 1px rgba(0,0,0,.1)",
          boxShadow: "none",
          transform: {
            sm: `translateX(0)`,
          },
        }}
      >
        <Toolbar sx={{ padding: { xs: 0, sm: 0 } }}>
          <Container>
            <Grid container display={"flex"} alignItems="center">
              <Grid item>
                <Typography variant="h6" component="p" fontWeight={"bold"}>
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    SPet
                  </Link>
                </Typography>
              </Grid>
              <Grid
                flexGrow={1}
                item
                display={"flex"}
                justifyContent="flex-end"
              >
                {!matches ? (
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setshowMenuMobile((prev) => !prev)}
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <DesktopMenu />
                )}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
