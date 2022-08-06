import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Button from "@mui/material/Button";

const HomeAppView = () => {
  const { logout, user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <h1>Usted está viendo una página protegida</h1>
      <p>Hola: {user.user.username}</p>
      <Button onClick={handleClick} variant="contained">
        Salir
      </Button>
    </div>
  );
};

export default HomeAppView;
