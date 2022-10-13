import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
// import { TitleStyle } from "./jeSection.style";
import { variantsTitle, variantsContent } from "./jeSection.variants";
import { Typography } from "@mui/material";

const JeSection = ({
  backgroundColor = "rgb(243, 242, 239)",
  component = "section",
  maxWidth = "lg",
  children,
  variantPaper,
  sx = { padding: { xs: "3rem 1rem", md: "5rem 1rem" } },
  ...props
}) => {
  return (
    <Paper
      component={component}
      sx={{ backgroundColor: backgroundColor, boxShadow: "none" }}
      variant={variantPaper}
    >
      {/* <Box component={component} sx={sx}> */}
      <Container maxWidth={maxWidth} sx={sx} {...props}>
        {children}
      </Container>
      {/* </Box> */}
    </Paper>
  );
};

const Title = ({
  component = motion.h1,
  children,
  variant = "h3",
  textAlign = "center",
  mb = 3,
  ...props
}) => {
  return (
    <Typography
      component={typeof component === "string" ? motion[component] : component}
      variants={variantsTitle}
      variant={variant}
      initial="hidden"
      whileInView="show"
      mb={mb}
      textAlign={textAlign}
      viewport={{
        once: true,
        amount: 1,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

const Content = ({
  component = motion.div,
  children,
  whileInView = "show",
  initial = "hidden",
  viewport = {
    once: true,
    amount: 0.5,
  },
  ...props
}) => {
  return (
    <Box
      component={typeof component === "string" ? motion[component] : component}
      variants={variantsContent}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      {...props}
    >
      {children}
    </Box>
  );
};

JeSection.Title = Title;
JeSection.Content = Content;

JeSection.propTypes = {
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outlined", "elevation", ""]),
};

export default JeSection;
