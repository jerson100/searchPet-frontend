import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

const PrivateRouter = () => {
  const { previousLoading, isLogued } = useAuthContext();
  if (previousLoading) return null;
  if (!isLogued) return <Navigate to={"/login"} />;
  return <>{<Outlet />}</>;
};

export default PrivateRouter;
