import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

const AppLayout = () => {
  const { previousLoading, isLogued } = useAuthContext();
  if (previousLoading) return <p>Cargando...</p>;
  if (!isLogued) return <Navigate to={"/login"} />;
  return <div>{<Outlet />}</div>;
};

export default AppLayout;
