import { Box } from "@mui/material";
import React from "react";
import useChatContext from "../../../../../hooks/useChatContext";
import ChatItem from "../ChatItem";

const ChatList = () => {
  const { chats, selectChat } = useChatContext();
  return (
    <Box
      sx={{
        listStyle: "none",
        p: 0,
        m: 0,
        overflowY: "auto",
        flexBasis: 0,
        flexGrow: 1,
      }}
    >
      {chats.map((chat, i) => (
        <ChatItem key={chat._id} {...chat} handleClick={selectChat} />
      ))}
    </Box>
  );
};

export default ChatList;
