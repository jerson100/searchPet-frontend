import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import {
  header_variants,
  show_header_initial_state_variants,
} from "./header.variants";

const Header = ({ setshowMenuMobile, controls }) => {
  return (
    <AppBar
      position="fixed"
      color="default"
      component={motion.div}
      animate={controls}
      variants={header_variants}
      sx={{
        borderBottom: ({ palette: { divider } }) => `solid 1px ${divider}`,
        boxShadow: "none",
        transform: { sm: `translateX(0)` },
        backdropFilter: "blur(5px)",
        backgroundColor: ({ palette }) => `
            ${alpha(palette.background.paper, 0.8)}
        `,
      }}
    >
      <Toolbar
        sx={{ padding: { xs: 0, sm: 0 } }}
        component={motion.div}
        variants={show_header_initial_state_variants}
        initial="hidden"
        animate="show"
      >
        <Container>
          <Box display="flex" alignItems="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { md: "none" } }}
              onClick={() => setshowMenuMobile((prev) => !prev)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="span" fontWeight={"bold"}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                SPet
              </Link>
            </Typography>
            <DesktopMenu />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
