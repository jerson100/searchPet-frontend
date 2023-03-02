import { Paper, Typography } from "@mui/material";
import React from "react";
import ChatList from "../ChatList";

const ChatLeft = () => {
  return (
    <Paper sx={{ display: "flex", flexDirection: "column", boxShadow: "none" }}>
      <Typography variant="h6" component="h1" mb={2} pl={2} pr={2} pt={2}>
        Mensajes
      </Typography>
      <ChatList />
    </Paper>
  );
};

export default ChatLeft;
