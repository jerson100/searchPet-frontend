import { Box } from "@mui/material";
import React from "react";
import MessageItem from "../MessageItem";

const MessageList = ({ messages }) => {
  return (
    <Box
      sx={{ listStyle: "none", margin: 0, padding: 0 }}
      component="ul"
      flex={"1 0 0"}
      overflow="auto"
    >
      {messages.map((message) => (
        <MessageItem key={message._id} {...message} />
      ))}
    </Box>
  );
};

export default MessageList;
