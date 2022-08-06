import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import People from "@mui/icons-material/People";
import useAxios from "axios-hooks";
import { useSnackbar } from "notistack";
import SaveIcon from "@mui/icons-material/Save";
import { validateSchema } from "../../../../../utils/validateSchema";
import { LoginUserSchema } from "../../../../../api/users.validate";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ loading }, execute] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const messageE = validateSchema({ email, password }, LoginUserSchema);
    // if (!Object.keys(messageE).length) {
    if (email && password) {
      try {
        const data = await execute({
          url: "/auth/login",
          data: { email, password },
        });
        console.log(data);
      } catch (e) {
        if (e.status) {
          enqueueSnackbar(e.message, { variant: "error" });
        }
      }
    } else {
      enqueueSnackbar("Todos los campos son necesarios", {
        variant: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

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
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            id="email"
            type="text"
            size="small"
            name="email"
            value={email}
            onChange={handleChange}
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
            type="password"
            size="small"
            name="password"
            value={password}
            onChange={handleChange}
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
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            startIcon={<SaveIcon />}
            loadingPosition="start"
          >
            Acceder
          </LoadingButton>
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
