import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ChatLeft from "./components/ChatLeft";
import ChatRight from "./components/ChatRight";
import { ChatProvider } from "../../../contexts/chatContext";
import { useLocation } from "react-router-dom";

const Chat = () => {
  const { state } = useLocation();
  useEffect(() => {
    window.history.replaceState(null, "");
  }, []);
  return (
    <ChatProvider newChat={state?.chat}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "40% 1fr",
          gridTemplateRows: "auto",
          width: "100%",
          height: "100%",
          gap: "1rem",
          flexGrow: 1,
        }}
      >
        <ChatLeft />
        <ChatRight />
      </Box>
    </ChatProvider>
  );
};

export default Chat;
