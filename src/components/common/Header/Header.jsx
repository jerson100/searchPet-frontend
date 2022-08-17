import React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import MenuNavigator from "./components/MenuNavigator";

const Header = ({ setshowMenuMobile, showMenuMobile }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          borderBottom: "solid 1px rgba(0,0,0,.1)",
          transform: { xs: `translateX(${showMenuMobile ? "200px" : "0"})` },
        }}
      >
        <Toolbar>
          <Grid container display={"flex"} alignItems="center">
            <Grid item>
              <Typography variant="h6" component="p" fontWeight={"bold"}>
                SPet
              </Typography>
            </Grid>
            <Grid flexGrow={1} item display={"flex"} justifyContent="flex-end">
              {!matches && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setshowMenuMobile((prev) => !prev)}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {!matches && (
        <MenuNavigator
          showMenuMobile={showMenuMobile}
          setshowMenuMobile={setshowMenuMobile}
        />
      )}
    </>
  );
};

export default Header;
