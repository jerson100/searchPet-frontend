import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Visibility from "@mui/icons-material/Visibility";
import People from "@mui/icons-material/People";
import Email from "@mui/icons-material/Email";
import Person from "@mui/icons-material/Person";
import { useSnackbar } from "notistack";
import Location from "../../components/Location";
import { validateSchema } from "../../../../../utils/validateSchema";
import { ValidateUserCreationSchema } from "../../../../../api/users.validate";
import JeInputTextError from "../../../../../components/common/JeInputTextError";
import useAxios from "axios-hooks";

const RegisterForm = () => {
  const [data, setdata] = useState({
    name: "",
    paternalSurname: "",
    maternalSurname: "",
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [dataError, setdataerror] = useState({
    name: "",
    paternalSurname: "",
    maternalSurname: "",
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [location, setlocation] = useState();

  const [{ loading: loadingCreateUser }, executeCreateUser] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setdata((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSchema(data, ValidateUserCreationSchema);
    setdataerror(errors);
    if (Object.keys(errors).length === 0 && location) {
      const copyUser = {
        ...data,
        location: {
          latitud: location[0],
          longitud: location[1],
        },
      };
      delete copyUser.cPassword;
      try {
        const a = await executeCreateUser({
          url: "/users",
          data: copyUser,
        });
        setdata({
          name: "",
          paternalSurname: "",
          maternalSurname: "",
          username: "",
          email: "",
          password: "",
          cPassword: "",
        });
        setdataerror({
          name: "",
          paternalSurname: "",
          maternalSurname: "",
          username: "",
          email: "",
          password: "",
          cPassword: "",
        });
        setlocation(null);
        enqueueSnackbar(`Se creó la cuenta con gmail ${a.email}`, {
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
      enqueueSnackbar("Verifique que que todos los datos sean correctos", {
        variant: "error",
      });
    }
  };

  return (
    <Box component="form" margin="normal" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={6} lg={5}>
          <JeInputTextError
            required
            fullWidth
            name="name"
            value={data.name}
            handleChange={handleChange}
            error={!!dataError.name}
            Icon={People}
            inputLabel="Nombres"
            errorMessage={dataError.name}
          />

          <JeInputTextError
            required
            fullWidth
            name="paternalSurname"
            value={data.paternalSurname}
            handleChange={handleChange}
            error={!!dataError.paternalSurname}
            Icon={People}
            inputLabel="Apellido Paterno"
            errorMessage={dataError.paternalSurname}
          />

          <JeInputTextError
            required
            fullWidth
            name="maternalSurname"
            value={data.maternalSurname}
            handleChange={handleChange}
            error={!!dataError.maternalSurname}
            Icon={People}
            inputLabel="Apellido Materno"
            errorMessage={dataError.maternalSurname}
          />

          <JeInputTextError
            required
            fullWidth
            name="username"
            value={data.username}
            handleChange={handleChange}
            error={!!dataError.username}
            Icon={Person}
            inputLabel="Nombre de usuario"
            errorMessage={dataError.username}
          />

          <JeInputTextError
            required
            fullWidth
            name="email"
            value={data.email}
            handleChange={handleChange}
            error={!!dataError.email}
            Icon={Email}
            inputLabel="email"
            errorMessage={dataError.email}
          />

          <JeInputTextError
            required
            fullWidth
            type="password"
            name="password"
            value={data.password}
            handleChange={handleChange}
            error={!!dataError.password}
            Icon={Visibility}
            inputLabel="Contraseña"
            autoComplete="new-password"
            errorMessage={dataError.password}
          />

          <JeInputTextError
            required
            fullWidth
            type="password"
            name="cPassword"
            value={data.cPassword}
            handleChange={handleChange}
            error={!!dataError.cPassword}
            Icon={Visibility}
            inputLabel="Confirmar contraseña"
            errorMessage={dataError.cPassword}
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
  );
};

export default RegisterForm;
