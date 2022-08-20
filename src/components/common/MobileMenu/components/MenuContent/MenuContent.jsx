import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AdministratorMenuList from "../AdministratorMenuList";
import ConfigurationMenuList from "../ConfigurationMenuList";
import MainMenuList from "../MainMenuList";
import User from "../User";
import Logout from "../Logout";

const MenuContent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "inherit",
        }}
      >
        <User />
        <Divider />
        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          component="ul"
        >
          <MainMenuList />
          <AdministratorMenuList />
          <ConfigurationMenuList />
          <Logout />
        </Box>
      </Box>
    </>
  );
};

export default MenuContent;
