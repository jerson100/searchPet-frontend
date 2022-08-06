import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuthContext = () => {
  const data = useContext(AuthContext);
  if (!data) {
    throw new Error("No se puede acceder al contexto");
  }
  return data;
};

export { useAuthContext };
