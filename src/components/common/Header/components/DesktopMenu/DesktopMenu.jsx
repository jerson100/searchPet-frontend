import React from "react";
import { Box } from "@mui/material";
import LeftMenu from "../LeftMenu";
import RightMenu from "../RightMenu/RightMenu";

const DesktopMenu = () => {
  return (
    <Box display="flex" flexGrow={1}>
      <LeftMenu />
      <RightMenu />
    </Box>
  );
};

export default DesktopMenu;
