import React from "react";
import Button from "@mui/material/Button";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Container } from "@mui/material";

const HomeView = () => {
  const { logout, user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <Container>
      <h1>Página Principal</h1>
      {user ? (
        <>
          <p>Hola: {user.user.username}</p>
          <Button onClick={handleClick} variant="contained">
            Salir
          </Button>{" "}
        </>
      ) : null}
    </Container>
  );
};

export default HomeView;
