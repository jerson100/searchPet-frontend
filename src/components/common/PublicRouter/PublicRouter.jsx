import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

const PublicRouter = ({ children }) => {
  const { previousLoading, isLogued } = useAuthContext();
  if (previousLoading) return <p>Cargando...</p>;
  if (isLogued) return <Navigate to={"/app"} />;
  return <>{children}</>;
};

export default PublicRouter;
