import React, { useEffect } from "react";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import { motion, useAnimationControls } from "framer-motion";
import { containerVariants } from "../../../views/public/LoginView/login.variants";

const AuthLayout = ({ children, maxWidth }) => {
  const controls = useAnimationControls();
  useEffect(() => {
    const animationStages = async () => {
      await controls.start("toBottom");
      await controls.start("center");
      await controls.start("scale");
    };
    animationStages();
    return () => {
      controls.stop();
    };
  }, []);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
      overflow={"hidden"}
    >
      <Box
        component={motion.div}
        maxWidth={maxWidth}
        width="100%"
        padding={{ xs: "0", md: "2rem" }}
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={containerVariants}
      >
        <Paper elevation={5} sx={{ minHeight: { xs: "100vh", md: "initial" } }}>
          {children}
        </Paper>
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
