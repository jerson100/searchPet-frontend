import React from "react";
import Box from "@mui/material/Box";
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

const LoginForm = () => {
  return (
    <Box
      padding={{
        xs: "2rem 1rem",
        md: "2rem",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        marginBottom={"1.5rem"}
      >
        Hola
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        align="center"
        marginBottom={"1.5rem"}
      >
        Ingrese sus datos correctos para poder empezar a interactuar con la
        aplicación
      </Typography>
      <Box component="form">
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            id="email"
            type="text"
            size="small"
            endAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <People />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <InputLabel size="small" htmlFor="email">
            Email
          </InputLabel>
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <OutlinedInput
            id="password"
            type="text"
            size="small"
            endAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Visibility />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <InputLabel size="small" htmlFor="password">
            Password
          </InputLabel>
        </FormControl>
        <Box display={"flex"} justifyContent="flex-end" marginBottom={"2rem"}>
          <Button variant="contained">Login</Button>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
          <Typography variant="body2" marginBottom={".5rem"}>
            No tienes una cuenta?
          </Typography>
          <Link target={"_blank"} href="https://www.google.com.pe">
            Registrate ahora!
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
