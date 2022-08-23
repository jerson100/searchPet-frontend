import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { TitleStyle } from "./jeSection.style";

const JeSection = ({ component, title, children, maxWidth }) => {
  return (
    <Paper sx={{ backgroundColor: "rgb(243, 242, 239)", boxShadow: "none" }}>
      <Box
        component={component}
        sx={{ padding: { xs: "3rem 0", md: "5rem 0" } }}
      >
        <Container maxWidth={maxWidth}>
          <TitleStyle component={"h1"} variant="h3">
            {title}
          </TitleStyle>
          <Box>{children}</Box>
        </Container>
      </Box>
    </Paper>
  );
};

JeSection.propTypes = {
  component: PropTypes.oneOf(["section", "div", "span"]),
  title: PropTypes.string,
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

JeSection.defaultProps = {
  component: "section",
  title: "",
  maxWidth: "lg",
};

export default JeSection;
