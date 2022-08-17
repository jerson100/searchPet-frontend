import { Box, Paper } from "@mui/material";
import React from "react";

const MenuNavigator = ({ showMenuMobile, setshowMenuMobile }) => {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          top: 0,
          height: "100vh",
          borderRight: "solid 1px rgba(0,0,0,.1)",
          width: "200px",
          zIndex: "10001",
          transform: `translateX(${showMenuMobile ? "0" : "-200px"})`,
        }}
      ></Paper>
      {showMenuMobile && (
        <Box
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
      )}
    </>
  );
};

export default MenuNavigator;
