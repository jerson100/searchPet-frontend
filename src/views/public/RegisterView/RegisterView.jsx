import React from "react";
import AuthLayout from "../../../components/common/AuthLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomForm from "./components/BottomForm";
import RegisterForm from "./components/RegisterForm";
import { Helmet } from "react-helmet";

const RegisterView = () => {
  return (
    <>
      <Helmet>
        <title>Registro de usuario | Spet</title>
        <meta name="description" content="Registra tu cuenta de usuario para poder acceder a todas las funcionalidades de la aplicación." />
      </Helmet>
      <AuthLayout maxWidth={"1200px"}>
        <Box padding={{ xs: "2rem 1rem", sm: "2rem" }}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            marginBottom={3}
          >
            Registro de usuario
          </Typography>
          <RegisterForm />
          <BottomForm />
        </Box>
      </AuthLayout>
    </>
  );
};

export default RegisterView;
