import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext";

const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("No se puede acceder al contexto");
  return context;
};

export default useMessageContext;
