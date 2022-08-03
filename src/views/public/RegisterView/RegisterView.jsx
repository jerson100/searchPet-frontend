import React, { useState } from "react";
import AuthLayout from "../../../components/common/AuthLayout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import People from "@mui/icons-material/People";
import Email from "@mui/icons-material/Email";
import Person from "@mui/icons-material/Person";
import FormHelperText from "@mui/material/FormHelperText";
import Location from "./components/Location";
import { validateSchema } from "../../../utils/validateSchema";
import validateUserCreationSchema from "../../../api/users.validate";

const RegisterView = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const errors = validateSchema(data, validateUserCreationSchema);
    setdataerror(errors);
    if (!errors) {
      console.log("realizar la petición");
    }
  };

  return (
    <AuthLayout maxWidth={"700px"}>
      <Box padding={"2rem 1rem"}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          marginBottom={"1.5rem"}
        >
          Registro de usuario
        </Typography>
        <Box component="form" margin="normal" onSubmit={handleSubmit}>
          <FormControl required fullWidth variant="outlined">
            <OutlinedInput
              id="nombres"
              type="text"
              size="small"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={!!dataError.name}
              endAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <People />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <InputLabel size="small" htmlFor="nombres">
              Nombres
            </InputLabel>
            <FormHelperText>{dataError.name}</FormHelperText>
          </FormControl>
          <Grid container spacing={{ sm: 1 }}>
            <Grid item xs={12} sm={6}>
              <FormControl
                required
                fullWidth
                variant="outlined"
                margin="normal"
              >
                <OutlinedInput
                  id="apaterno"
                  type="text"
                  size="small"
                  name="paternalSurname"
                  value={data.paternalSurname}
                  onChange={handleChange}
                  error={!!dataError.paternalSurname}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <People />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="aPaterno"
                />
                <InputLabel size="small" htmlFor="apaterno">
                  Apellido Paterno
                </InputLabel>
                <FormHelperText>{dataError.paternalSurname}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                required
                fullWidth
                variant="outlined"
                margin="normal"
              >
                <OutlinedInput
                  id="amaterno"
                  type="text"
                  size="small"
                  name="maternalSurname"
                  value={data.maternalSurname}
                  onChange={handleChange}
                  error={!!dataError.maternalSurname}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <People />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <InputLabel size="small" htmlFor="amaterno">
                  Apellido Materno
                </InputLabel>
                <FormHelperText>{dataError.maternalSurname}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={{ sm: 1 }}>
            <Grid item xs={12} sm={6}>
              <FormControl
                required
                variant="outlined"
                margin="normal"
                fullWidth
              >
                <OutlinedInput
                  id="username"
                  type="text"
                  size="small"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  error={!!dataError.username}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Person />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Username"
                />
                <InputLabel size="small" htmlFor="username">
                  Username
                </InputLabel>
                <FormHelperText>{dataError.username}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                required
                variant="outlined"
                margin="normal"
                fullWidth
              >
                <OutlinedInput
                  id="email"
                  type="text"
                  size="small"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  error={!!dataError.email}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Email"
                />
                <InputLabel size="small" htmlFor="email">
                  Email
                </InputLabel>
                <FormHelperText>{dataError.email}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Location location={location} setlocation={setlocation} />
          <Grid container spacing={{ sm: 1 }}>
            <Grid item xs={12} sm={6}>
              <FormControl
                required
                fullWidth
                variant="outlined"
                margin="normal"
              >
                <OutlinedInput
                  id="password"
                  type="password"
                  size="small"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  error={!!dataError.password}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <InputLabel size="small" htmlFor="password">
                  Contraseña
                </InputLabel>
                <FormHelperText>{dataError.password}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                required
                fullWidth
                variant="outlined"
                margin="normal"
              >
                <OutlinedInput
                  id="rpassword"
                  type="password"
                  size="small"
                  name="cPassword"
                  value={data.cPassword}
                  onChange={handleChange}
                  error={!!dataError.cPassword}
                  endAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="rPassword"
                />
                <InputLabel size="small" htmlFor="rpassword">
                  Repite la contraseña
                </InputLabel>
                <FormHelperText>{dataError.cPassword}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent="flex-end" marginBottom={"2rem"}>
            <Button type="submit" variant="contained">
              Crear cuenta
            </Button>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
          <Typography variant="body2" marginBottom={".5rem"}>
            Ya tienes una cuenta?
          </Typography>
          <Link href="/login">Inicia sesión ahora!</Link>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default RegisterView;
