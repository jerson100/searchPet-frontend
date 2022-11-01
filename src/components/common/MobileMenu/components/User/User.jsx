import React from "react";
import { Avatar, Typography, Box, Link } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import ButtonAcceder from "../../../ButtonAcceder";

const User = () => {
  const { user } = useAuthContext();
  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        alt={user?.user?.name}
        sx={{ width: 75, height: 75, mb: 1 }}
        src={user?.user?.urlImageProfile}
      />
      {!user?.user ? (
        <ButtonAcceder isLogued={false} />
      ) : (
        <Typography
          variant="h6"
          component="p"
          sx={{
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Link
            component={LinkRouter}
            underline="none"
            color="text.primary"
            to={`/users/${user.user._id}`}
          >
            {user.user.username}
          </Link>
        </Typography>
      )}
    </Box>
  );
};

export default User;
