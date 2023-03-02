import { useContext } from "react";
import { ChatContext } from "../contexts/chatContext";

const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("No se puede acceder al context del componente");
  }
  return context;
};

export default useChatContext;
