import React from "react";
import Button from "@mui/material/Button";
import { useAuthContext } from "../../../hooks/useAuthContext";

const HomeView = () => {
  const { logout, user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  console.log(user);
  return (
    <div>
      <h1>Página Principal</h1>
      {user ? (
        <>
          <p>Hola: {user.user.username}</p>
          <Button onClick={handleClick} variant="contained">
            Salir
          </Button>{" "}
        </>
      ) : null}
    </div>
  );
};

export default HomeView;
