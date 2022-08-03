import React from "react";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

const AuthLayout = ({ children, maxWidth }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
    >
      <Box maxWidth={maxWidth} width="100%" style={{ padding: "1rem" }}>
        <Paper elevation={5}>{children}</Paper>
      </Box>
    </Box>
  );
};

AuthLayout.propTypes = {
  maxWidth: PropTypes.string,
};

AuthLayout.defaultProps = {
  maxWidth: "1000px",
};

export default AuthLayout;
