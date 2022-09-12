import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "../../common/Header/Header";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { mainLayout_variants } from "./mainLayout.variants";
import { useAuthContext } from "../../../hooks/useAuthContext";
import MobileMenu from "../../common/MobileMenu";
import Footer from "../../common/Footer";
import PetLoader from "../../common/PetLoader";
// import CatLoader from "../../common/CatLoader";

const MainLayout = () => {
  const { previousLoading } = useAuthContext();
  const [showMenuMobile, setshowMenuMobile] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const controls = useAnimationControls();

  useEffect(() => {
    return () => {
      document.body.style = "";
      document.documentElement.style = "";
    };
  }, []);

  useEffect(() => {
    const d = async () => {
      if (!matches && showMenuMobile) {
        document.body.style.overflowX = "hidden";
        document.documentElement.style.overflow = "hidden";
        await controls.start("active");
      } else {
        await controls.start("inactive");
        document.body.style = "";
        document.documentElement.style = "";
      }
    };
    d();
  }, [showMenuMobile, controls, matches]);

  if (previousLoading) return <PetLoader />;

  return (
    <>
      <ContentLayout
        setshowMenuMobile={setshowMenuMobile}
        controls={controls}
      />
      <AnimatePresence>
        {!matches && showMenuMobile && (
          <MobileMenu setshowMenuMobile={setshowMenuMobile} />
        )}
      </AnimatePresence>
    </>
  );
};

const ContentLayout = React.memo(({ setshowMenuMobile, controls }) => {
  return (
    <Box
      component={motion.div}
      animate={controls}
      variants={mainLayout_variants}
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header setshowMenuMobile={setshowMenuMobile} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          paddingTop: {
            xs: "57px",
            sm: "65px",
          },
          transform: {
            sm: `translateX(0)`,
          },
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
});

export default MainLayout;
