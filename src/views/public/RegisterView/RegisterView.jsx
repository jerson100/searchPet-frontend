import React from "react";
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
import Directions from "@mui/icons-material/Directions";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import Location from "./components/Location";

const RegisterView = () => {
  return (
    <AuthLayout maxWidth={"600px"}>
      <Box padding={"2rem 1rem"}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          marginBottom={"1.5rem"}
        >
          Registro de usuario
        </Typography>
        <Box component="form" margin="normal">
          <FormControl required fullWidth variant="outlined">
            <OutlinedInput
              id="nombres"
              type="text"
              size="small"
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
            <FormHelperText>Required</FormHelperText>
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
                <FormHelperText>Required</FormHelperText>
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
                <FormHelperText>Required</FormHelperText>
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
                <FormHelperText>Required</FormHelperText>
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
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Location />
          {/* <Grid container spacing={{ sm: 1 }}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel size="small" id="departamento">
                  Departamento
                </InputLabel>
                <Select
                  labelId="departamento"
                  id="demo-simple-select-required"
                  label="Departamento"
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Lima</MenuItem>
                  <MenuItem value={20}>Lima</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel size="small" id="provincia">
                  Provincia
                </InputLabel>
                <Select
                  labelId="provincia"
                  id="demo-simple-select-required"
                  label="provincia"
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Lima</MenuItem>
                  <MenuItem value={20}>Lima</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel size="small" id="distrito">
                  Distrito
                </InputLabel>
                <Select
                  labelId="distrito"
                  id="demo-simple-select-required"
                  label="Distrito"
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Huacho</MenuItem>
                  <MenuItem value={20}>Sayán</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid>
          </Grid> */}
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
                  type="text"
                  size="small"
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
                <FormHelperText>Required</FormHelperText>
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
                  type="text"
                  size="small"
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
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent="flex-end" marginBottom={"2rem"}>
            <Button variant="contained">Crear cuenta</Button>
          </Box>
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Typography variant="body2" marginBottom={".5rem"}>
              Ya tienes una cuenta?
            </Typography>
            <Link href="/login">Inicia sesión ahora!</Link>
          </Box>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default RegisterView;
