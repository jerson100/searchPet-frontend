import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { TitleStyle } from "./jeSection.style";
import { variantsTitle, variantsContent } from "./jeSection.variants";

const JeSection = ({
  backgroundColor = "rgb(243, 242, 239)",
  component = "section",
  maxWidth = "lg",
  children,
  sx = { padding: { xs: "3rem 0", md: "5rem 0" } },
  ...props
}) => {
  return (
    <Paper sx={{ backgroundColor: backgroundColor, boxShadow: "none" }}>
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
  mb = 2,
  ...props
}) => {
  return (
    <TitleStyle
      component={typeof component === "string" ? motion[component] : component}
      variants={variantsTitle}
      variant={variant}
      initial="hidden"
      whileInView="show"
      mb={mb}
      viewport={{
        once: true,
        amount: 1,
      }}
      {...props}
    >
      {children}
    </TitleStyle>
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
  p = "0 1rem",
  ...props
}) => {
  return (
    <Box
      component={typeof component === "string" ? motion[component] : component}
      variants={variantsContent}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      p={p}
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
};

export default JeSection;
