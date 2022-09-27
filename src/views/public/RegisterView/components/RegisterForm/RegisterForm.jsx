import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useSnackbar } from "notistack";
import useAxios from "axios-hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Visibility from "@mui/icons-material/Visibility";
import People from "@mui/icons-material/People";
import Email from "@mui/icons-material/Email";
import Person from "@mui/icons-material/Person";
// import { validateSchema } from "../../../../../utils/validateSchema";
import { ValidateUserCreationSchema } from "../../../../../api/users.validate";
import JeInputTextError from "../../../../../components/common/JeInputTextError";
import Location from "../../../../../components/common/Location";

const RegisterForm = () => {
  const [location, setlocation] = useState();

  const [{ loading: loadingCreateUser }, createUser] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );
  const { enqueueSnackbar } = useSnackbar();

  const sendNewUser = async (values, resetForm) => {
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
  };

  return (
    <Formik
      initialValues={{
        name: "",
        paternalSurname: "",
        maternalSurname: "",
        username: "",
        email: "",
        password: "",
        cPassword: "",
      }}
      validationSchema={ValidateUserCreationSchema}
      onSubmit={async (values, { resetForm }) => {
        await sendNewUser(values, resetForm);
      }}
    >
      {({ errors, touched }) => (
        <Box component={Form} margin="normal">
          <Grid container>
            <Grid item xs={12} md={6} lg={5}>
              <JeInputTextError
                fullWidth
                name="name"
                error={!!touched.name && !!errors.name}
                Icon={People}
                inputLabel="Nombres"
              />

              <JeInputTextError
                fullWidth
                name="paternalSurname"
                error={!!touched.paternalSurname && !!errors.paternalSurname}
                Icon={People}
                inputLabel="Apellido Paterno"
              />

              <JeInputTextError
                fullWidth
                name="maternalSurname"
                error={!!touched.maternalSurname && !!errors.maternalSurname}
                Icon={People}
                inputLabel="Apellido Materno"
              />

              <JeInputTextError
                fullWidth
                name="username"
                error={!!touched.username && !!errors.username}
                Icon={Person}
                inputLabel="Nombre de usuario"
              />

              <JeInputTextError
                fullWidth
                name="email"
                error={!!touched.email && !!errors.email}
                Icon={Email}
                inputLabel="email"
              />

              <JeInputTextError
                fullWidth
                type="password"
                name="password"
                error={!!touched.password && !!errors.password}
                Icon={Visibility}
                inputLabel="Contraseña"
                autoComplete="new-password"
              />

              <JeInputTextError
                fullWidth
                type="password"
                name="cPassword"
                error={!!touched.cPassword && !!errors.cPassword}
                Icon={Visibility}
                inputLabel="Confirmar contraseña"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={7} paddingLeft={{ md: "2rem" }}>
              <Location location={location} setlocation={setlocation} />
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent="flex-end" marginBottom={"2rem"}>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loadingCreateUser}
              startIcon={<SaveIcon />}
              loadingPosition="start"
            >
              Crear cuenta
            </LoadingButton>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default RegisterForm;
