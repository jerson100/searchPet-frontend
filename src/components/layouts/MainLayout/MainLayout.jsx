import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../common/Header/Header";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { mainLayout_variants } from "./mainLayout.variants";
import { useAuthContext } from "../../../hooks/useAuthContext";
import MobileMenu from "../../common/MobileMenu";
import Footer from "../../common/Footer";
import PetLoader from "../../common/PetLoader";
import Heart from "../../common/Heart";
// import CatLoader from "../../common/CatLoader";

const MainLayout = () => {
  const { previousLoading } = useAuthContext();
  const [showMenuMobile, setshowMenuMobile] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const controls = useAnimationControls();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
    <>
      <Header setshowMenuMobile={setshowMenuMobile} controls={controls} />
      <Box
        component={motion.div}
        animate={controls}
        variants={mainLayout_variants}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: {
            xs: "calc(100vh - 57px)",
            sm: "calc(100vh - 65px)",
          },
          paddingTop: {
            xs: "57px",
            sm: "65px",
          },
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            // bgcolor: "background.default",
            // color: "text.primary",
            transform: {
              sm: `translateX(0)`,
            },
          }}
        >
          <Outlet />
        </Box>
        <Footer />
        <Heart />
      </Box>
    </>
  );
});

export default MainLayout;
