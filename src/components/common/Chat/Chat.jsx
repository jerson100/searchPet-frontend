import React from "react";
import { Box, Grid } from "@mui/material";
import ChatLeft from "./components/ChatLeft";
import ChatRight from "./components/ChatRight";
import { ChatProvider } from "../../../contexts/chatContext";

const Chat = () => {
  return (
    <ChatProvider>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "40% 1fr",
          gridTemplateRows: "auto",
          width: "100%",
          height: "100%",
          gap: "1rem",
          flexGrow: 1,
          //   flexDirection: "column",
        }}
      >
        <ChatLeft />
        <ChatRight />
      </Box>
    </ChatProvider>
  );
};

export default Chat;
