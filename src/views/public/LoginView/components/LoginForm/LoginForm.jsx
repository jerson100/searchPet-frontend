import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import People from "@mui/icons-material/People";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  return (
    <Box padding={"1rem"}>
      <Typography variant="h1">Hello Again!</Typography>
      <Typography variant="p">
        Ingrese sus datos para poder comenzar a interactuar con los demás
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
        <Box display={"flex"} justifyContent="flex-end">
          <Button variant="contained">Login</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
