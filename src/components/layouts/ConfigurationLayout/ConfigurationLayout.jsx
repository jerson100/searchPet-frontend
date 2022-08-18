import React from "react";
import { Outlet } from "react-router-dom";

const ConfigurationLayout = () => {
  return <div>{<Outlet />}</div>;
};

export default ConfigurationLayout;
