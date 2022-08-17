import React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import MobileMenu from "./components/MobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import { header_variants } from "./header.variants";
import { Container } from "@mui/system";

const Header = ({ setshowMenuMobile, showMenuMobile, matches, controls }) => {
  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        component={motion.header}
        animate={controls}
        variants={header_variants}
        sx={{
          borderBottom: "solid 1px rgba(0,0,0,.1)",
          transform: {
            xs: `translateX(${showMenuMobile ? "200px" : "0"})`,
            sm: `translateX(0)`,
          },
        }}
      >
        <Toolbar sx={{ padding: { xs: 0, sm: 0 } }}>
          <Container>
            <Grid container display={"flex"} alignItems="center">
              <Grid item>
                <Typography variant="h6" component="p" fontWeight={"bold"}>
                  SPet
                </Typography>
              </Grid>
              <Grid
                flexGrow={1}
                item
                display={"flex"}
                justifyContent="flex-end"
              >
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
          </Container>
        </Toolbar>
      </AppBar>
      <AnimatePresence>
        {!matches && showMenuMobile && (
          <MobileMenu setshowMenuMobile={setshowMenuMobile} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
