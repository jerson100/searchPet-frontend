import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import LoginForm from "./components/LoginForm";
import AuthLayout from "../../../components/common/AuthLayout";
import { Helmet } from "react-helmet";

const LoginView = () => {
  return (
    <>
      <Helmet>
        <title>Login | Spet</title>
        <meta
          name="description"
          content="Accede con tu cuenta para poder disfrutar de toda la capacidad de la aplicación SPet"
        />
      </Helmet>
      <AuthLayout>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src="https://www.elespectador.com/resizer/6_cZmkvFc1dqaJeNlklnGrtmbrI=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/V5RZA43Z7FEQVM6ASB46MPVXTI.jpg"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            ></Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              height={{
                xs: "auto",
                md: "500px",
              }}
            >
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </AuthLayout>
    </>
  );
};

export default LoginView;
