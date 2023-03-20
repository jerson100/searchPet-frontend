import React from "react";
import { Badge, IconButton, Stack } from "@mui/material";
import ButtonAcceder from "../../../ButtonAcceder";
import UserLogued from "../UserLogued";
import MailIcon from "@mui/icons-material/Mail";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import ThemeButton from "../../../ThemeButton";
import NotificationTop from "../TopNotification";
import { Link } from "react-router-dom";

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
      <li>
        <ThemeButton />
      </li>
      {user?.user && (
        <>
          <li>
            <IconButton
              size="medium"
              aria-label="show 4 new mails"
              color="inherit"
              LinkComponent={Link}
              to="/chats"
            >
              {/* <Badge badgeContent={4} color="error"> */}
              <MailIcon />
              {/* </Badge> */}
            </IconButton>
          </li>
          <li>
            <NotificationTop />
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
