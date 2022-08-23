import React from "react";
import Box from "@mui/material/Box";
import { SvgIcon, Typography } from "@mui/material";

const Functionality = ({ svg, text, viewBox = "0 0 400 300" }) => {
  return (
    <Box padding={2} textAlign="center">
      <SvgIcon
        fontSize="large"
        component={svg}
        viewBox={viewBox}
        sx={{
          width: { xs: "100%" },
          height: { xs: "100px", md: "150px", lg: "250px" },
        }}
      />
      <Typography variant="body1" textAlign={"center"}>
        {text}
      </Typography>
    </Box>
  );
};

export default Functionality;
