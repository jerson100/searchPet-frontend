import React from "react";
import { Divider, Stack } from "@mui/material";
import MenuItems from "../MenuItems";

const DesktopNavigation = () => {
  return (
    <Stack
      direction="row"
      divider={
        <Divider
          orientation="vertical"
          flexItem
          sx={{ marginLeft: "0 !important" }}
        />
      }
      spacing={2}
      sx={{ height: { xs: "50px", md: "75px" } }}
    >
      <MenuItems />
    </Stack>
  );
};

export default DesktopNavigation;
