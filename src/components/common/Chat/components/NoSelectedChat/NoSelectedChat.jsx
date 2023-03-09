import { Box, Typography } from "@mui/material";
import React from "react";

const NoSelectedChat = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      <Typography variant="body2" component="p">
        Nigún chat seleccionado
      </Typography>
    </Box>
  );
};

export default NoSelectedChat;
