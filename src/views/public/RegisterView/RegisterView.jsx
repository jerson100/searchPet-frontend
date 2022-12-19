import React, { useState, useCallback } from "react";
// import AuthLayout from "../../../components/common/AuthLayout";
import RegisterForm from "./components/RegisterForm";
import { Helmet } from "react-helmet";
import { Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import useAxios from "axios-hooks";
import SelectLocation from "./components/SelectLocation/SelectLocation";

const RegisterView = () => {
  const [location, setlocation] = useState();

  const [{ loading: loadingCreateUser }, createUser] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );
  const { enqueueSnackbar } = useSnackbar();

  const sendNewUser = useCallback(
    async (values, resetForm) => {
      if (location) {
        try {
          const a = await createUser({
            url: "/users",
            data: {
              ...values,
              location: {
                latitud: location[0],
                longitud: location[1],
              },
            },
          });
          setlocation(null);
          resetForm();
          enqueueSnackbar(`Se creó la cuenta con gmail ${a.data.email}`, {
            variant: "success",
          });
        } catch (e) {
          if (e.status) {
            enqueueSnackbar(e.message, {
              variant: "error",
            });
          }
        }
      } else {
        enqueueSnackbar("Le faltó seleccionar la localización", {
          variant: "error",
        });
      }
    },
    [location, enqueueSnackbar, createUser]
  );

  return (
    <>
      <Helmet>
        <title>Registro de usuario | Spet</title>
        <meta
          name="description"
          content="Registra tu cuenta de usuario para poder acceder a todas las funcionalidades de la aplicación."
        />
      </Helmet>
      {/* <AuthLayout maxWidth={"1200px"}> */}
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          padding={2}
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            marginBottom={3}
          >
            Registro de usuario
          </Typography>
          <RegisterForm sendNewUser={sendNewUser} loading={loadingCreateUser} />
        </Grid>
        <SelectLocation location={location} setlocation={setlocation} />
      </Grid>
      {/* </AuthLayout> */}
    </>
  );
};

export default RegisterView;
