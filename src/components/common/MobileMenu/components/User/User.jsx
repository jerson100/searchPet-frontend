import { Avatar, Typography, Box } from "@mui/material";
import React from "react";
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
        <Typography variant="h6" component="p">
          {user.user.username}
        </Typography>
      )}
    </Box>
  );
};

export default User;
