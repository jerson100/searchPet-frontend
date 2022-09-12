import React from "react";
import { Badge, IconButton, Stack } from "@mui/material";
import ButtonAcceder from "../../../ButtonAcceder";
import UserLogued from "../UserLogued";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useAuthContext } from "../../../../../hooks/useAuthContext";

const RightMenu = () => {
  const { user } = useAuthContext();
  return (
    <Stack
      direction="row"
      spacing={1}
      flexGrow={1}
      justifyContent="flex-end"
      sx={{
        listStyle: "none",
        margin: 0,
        alignItems: "center",
        p: 0,
      }}
      component="ul"
    >
      {user?.user && (
        <>
          <li>
            <IconButton
              size="medium"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </li>
          <li>
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </li>
        </>
      )}

      <li>
        {!user?.user ? <ButtonAcceder isLogued={false} /> : <UserLogued />}
      </li>
    </Stack>
  );
};

export default RightMenu;
