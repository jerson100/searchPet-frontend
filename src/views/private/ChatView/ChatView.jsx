import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Chat from "../../../components/common/Chat";

const ChatView = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        mt: 2,
        mb: 2,
      }}
    >
      <Chat />
    </Container>
  );
};

export default ChatView;
