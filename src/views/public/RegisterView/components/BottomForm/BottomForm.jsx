import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const BottomForm = () => {
  return (
    <Box display={"flex"} flexDirection="column" alignItems={"center"}>
      <Typography variant="body2" marginBottom={".5rem"}>
        Ya tienes una cuenta?
      </Typography>
      <Link href="/login">Inicia sesión ahora!</Link>
    </Box>
  );
};

export default React.memo(BottomForm);
