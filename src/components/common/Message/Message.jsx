import React from "react";
import { MessageProvider } from "../../../contexts/messageContext";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList";

const Message = () => {
  return (
    <MessageProvider>
      <MessageList />
      <MessageForm />
    </MessageProvider>
  );
};

export default Message;
