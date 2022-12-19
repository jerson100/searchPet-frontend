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
import BottomForm from "../BottomForm";
import JePasswordInput from "../../../../../components/common/JePasswordInput/JePasswordInput";

const RegisterForm = React.memo(
  ({ sendNewUser, loading: loadingCreateUser }) => {
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

            <JePasswordInput
              fullWidth
              type="password"
              name="password"
              error={!!touched.password && !!errors.password}
              Icon={Visibility}
              inputLabel="Contraseña"
              autoComplete="new-password"
            />

            <JePasswordInput
              fullWidth
              type="password"
              name="cPassword"
              error={!!touched.cPassword && !!errors.cPassword}
              Icon={Visibility}
              inputLabel="Confirmar contraseña"
            />
            <Box display={"flex"} justifyContent="center" mb={2} mt={2}>
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
            <BottomForm />
          </Box>
        )}
      </Formik>
    );
  }
);

export default RegisterForm;
