import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

const PetLayout = () => {
  const { previousLoading, isLogued } = useAuthContext();
  if (previousLoading) return null;
  if (!isLogued) return <Navigate to={"/login"} />;
  return <div>{<Outlet />}</div>;
};

export default PetLayout;
