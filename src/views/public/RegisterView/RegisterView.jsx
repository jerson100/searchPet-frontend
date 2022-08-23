import React from "react";
import AuthLayout from "../../../components/common/AuthLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomForm from "./components/BottomForm";
import RegisterForm from "./components/RegisterForm";

const RegisterView = () => {
  return (
    <AuthLayout maxWidth={"1200px"}>
      <Box padding={{ xs: "2rem 1rem", sm: "2rem" }}>
        <Typography variant="h3" component="h1" align="center" marginBottom={3}>
          Registro de usuario
        </Typography>
        <RegisterForm />
        <BottomForm />
      </Box>
    </AuthLayout>
  );
};

export default RegisterView;
