import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const User = () => {
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
      <Typography variant="h6" component="p">
        jerson100
      </Typography>
    </Box>
  );
};

export default User;
