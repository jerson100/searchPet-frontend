import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginForm from "./components/LoginForm";

const LoginView = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
    >
      <Box maxWidth={"500px"} width="100%">
        <Grid container>
          <Grid item xs={12}>
            1
          </Grid>
          <Grid item xs={12}>
            <Box>
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginView;
