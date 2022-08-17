import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import Logout from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import AdministratorMenuList from "../AdministratorMenuList";
import ConfigurationMenuList from "../ConfigurationMenuList";
import User from "../User";

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
          <li>
            <ConfigurationMenuList />
          </li>
          <Divider component="li" />
          <li>
            <AdministratorMenuList />
          </li>
          <Divider component="li" />
          <li>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component="ul"
              aria-labelledby="nested-list-subheader-cf"
              subheader={
                <ListSubheader component="li" id="nested-list-subheader-cf">
                  Configuración
                </ListSubheader>
              }
            >
              <ListItemButton component="li">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItemButton>
              <ListItemButton component="li">
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
          </li>
          <Divider component="li" />
          <Logout />
        </Box>
      </Box>
    </>
  );
};

export default MenuContent;
