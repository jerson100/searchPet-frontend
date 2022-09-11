import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import PetLoader from "../PetLoader";

const PublicRouter = ({ children }) => {
  const { previousLoading, isLogued } = useAuthContext();
  if (previousLoading) return <PetLoader />;
  if (isLogued) return <Navigate to={"/"} />;
  return <>{children}</>;
};

export default PublicRouter;
