import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as LinkRouter } from "react-router-dom";

const BottomForm = () => {
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"}>
      <Typography variant="body2" marginBottom={".5rem"}>
        Ya tienes una cuenta?
      </Typography>
      <Link to="/login" component={LinkRouter}>
        Inicia sesión ahora!
      </Link>
    </Box>
  );
};

export default React.memo(BottomForm);
