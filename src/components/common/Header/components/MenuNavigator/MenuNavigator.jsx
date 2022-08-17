import { Box, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { menu_mobile_variants } from "../../header.variants";
import MenuContent from "../MenuContent";

const MenuNavigator = ({ setshowMenuMobile }) => {
  return (
    <Box
      component={motion.div}
      initial="inactive"
      animate="active"
      exit="inactive"
      variants={menu_mobile_variants.container}
    >
      <Paper
        component={motion.div}
        variants={menu_mobile_variants.paper}
        sx={{
          position: "fixed",
          top: 0,
          height: "100vh",
          borderRight: "solid 1px rgba(0,0,0,.1)",
          width: "200px",
          zIndex: "10001",
          //   transform: `translateX(${showMenuMobile ? "0" : "-200px"})`,
        }}
      >
        <MenuContent />
      </Paper>
      <Box
        component={motion.div}
        variants={menu_mobile_variants.background}
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          zIndex: "10000",
          backgroundColor: "rgba(0,0,0,.4)",
        }}
        onClick={() => setshowMenuMobile(false)}
      />
    </Box>
  );
};

export default MenuNavigator;
