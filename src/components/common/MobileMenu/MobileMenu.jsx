import React from "react";
import ReactDOM from "react-dom";
import { Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { menu_mobile_variants } from "./mobile.variants";
import MenuContent from "./components/MenuContent";

const MobileMenu = ({ setshowMenuMobile }) => {
  return ReactDOM.createPortal(
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
          zIndex: (props) => {
            return props.zIndex.appBar + 2;
          },
        }}
      >
        <MenuContent />
      </Paper>
      <Box
        component={motion.div}
        variants={menu_mobile_variants.background}
        sx={{
          position: "fixed",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,.4)",
          backdropFilter: "blur(5px)",
          zIndex: (props) => {
            return props.zIndex.appBar + 1;
          },
        }}
        onClick={() => setshowMenuMobile(false)}
      />
    </Box>,
    document.body
  );
};

export default MobileMenu;
