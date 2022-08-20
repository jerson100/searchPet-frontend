import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ButtonAcceder = ({ isLogued }) => {
  return (
    <>
      {!isLogued ? (
        <Button to="/login" color="primary" variant="outlined" component={Link}>
          Acceder
        </Button>
      ) : null}
    </>
  );
};

export default ButtonAcceder;
