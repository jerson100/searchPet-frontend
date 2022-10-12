import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { TitleStyle } from "./jeSection.style";
import { variantsTitle, variantsContent } from "./jeSection.variants";

const JeSection = ({
  component = "section",
  title = "",
  variantTitle = "h3",
  maxWidth = "lg",
  children,
}) => {
  return (
    <Paper sx={{ backgroundColor: "rgb(243, 242, 239)", boxShadow: "none" }}>
      <Box
        component={component}
        sx={{ padding: { xs: "3rem 0", md: "5rem 0" } }}
      >
        <Container maxWidth={maxWidth}>
          {title && (
            <TitleStyle
              component={motion.h1}
              variants={variantsTitle}
              variant={variantTitle}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
            >
              {title}
            </TitleStyle>
          )}
          <Box
            component={motion.div}
            variants={variantsContent}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            {children}
          </Box>
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

export default JeSection;
