import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../common/Header/Header";
import { motion, useAnimationControls } from "framer-motion";
import { mainLayout_variants } from "./mainLayout.variants";

const MainLayout = () => {
  const [showMenuMobile, setshowMenuMobile] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const controls = useAnimationControls();

  useEffect(() => {
    if (showMenuMobile) {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  }, [showMenuMobile]);

  useEffect(() => {
    if (matches) {
      if (showMenuMobile) {
        controls.start("active");
      } else {
        controls.start("inactive");
      }
    }
  }, [showMenuMobile, controls, matches]);

  return (
    <>
      <Header
        setshowMenuMobile={setshowMenuMobile}
        showMenuMobile={showMenuMobile}
        matches={matches}
      />
      <Box
        component={motion.main}
        animate={controls}
        variants={mainLayout_variants}
        sx={{
          transform: {
            xs: `translateX(${showMenuMobile ? "200px" : "0"})`,
            sm: `translateX(0)`,
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
