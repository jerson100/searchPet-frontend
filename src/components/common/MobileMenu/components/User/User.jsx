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
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 75, height: 75, mb: 1 }}
      />
      {!user?.user ? (
        <ButtonAcceder isLogued={true} />
      ) : (
        <Typography variant="h6" component="p">
          jerson100
        </Typography>
      )}
    </Box>
  );
};

export default User;
