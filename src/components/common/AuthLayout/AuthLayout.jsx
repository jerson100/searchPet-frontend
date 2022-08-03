import React from "react";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const AuthLayout = ({ children }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
    >
      <Box maxWidth={"1000px"} width="100%" style={{ padding: "1rem" }}>
        <Paper elevation={5}>{children}</Paper>
      </Box>
    </Box>
  );
};

export default AuthLayout;
