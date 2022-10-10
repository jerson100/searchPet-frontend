import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Pet404 from "../../../assets/img/svg/pet404.svg";
import PropTypes from "prop-types";

const ErrorPage = ({
  status = 404,
  msg = "Estás navegando por lugares desconocidos",
  to = "/",
  buttonText = "Ir al inicio",
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
      padding="3rem 1rem"
      textAlign="center"
    >
      <Box
        component="img"
        mb={2}
        src={Pet404}
        width={{ xs: "200px", md: "300px" }}
        alt="pasando a la mascota"
      />
      <Typography variant="h3" component="p" mb={2}>
        {status}
      </Typography>
      <Typography variant="h4" component="h1" mb={2}>
        {msg}
      </Typography>
      <Button LinkComponent={Link} to={to} variant="contained">
        {buttonText}
      </Button>
    </Stack>
  );
};

ErrorPage.propTypes = {
  buttonText: PropTypes.string,
  to: PropTypes.string,
  msg: PropTypes.string,
  status: PropTypes.oneOf([400, 401, 402, 403, 404, 500]),
};

export default ErrorPage;
