import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MenuNavigator from "../../common/Header/components/MenuNavigator";
import Header from "../../common/Header/Header";

const MainLayout = () => {
  const [showMenuMobile, setshowMenuMobile] = useState(false);
  useEffect(() => {
    if (showMenuMobile) {
      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  }, [showMenuMobile]);

  return (
    <>
      <Header
        setshowMenuMobile={setshowMenuMobile}
        showMenuMobile={showMenuMobile}
      />
      <MenuNavigator
        showMenuMobile={showMenuMobile}
        setshowMenuMobile={setshowMenuMobile}
      />
      <Box
        component="main"
        style={{ transform: `translatex(${showMenuMobile ? "200px" : "0"})` }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
