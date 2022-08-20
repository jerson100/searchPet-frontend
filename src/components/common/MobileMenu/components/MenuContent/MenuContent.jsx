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
          component="nav"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <MainMenuList />
            <AdministratorMenuList />
            <ConfigurationMenuList />
            <Logout />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MenuContent;
