import { Box } from "@mui/material";
import React from "react";
import useChatContext from "../../../../../hooks/useChatContext";
import ChatItem from "../ChatItem";

const ChatList = () => {
  const { chats } = useChatContext();
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
      {chats.map(({ _id, lastMessage, name, urlImageProfile }, i) => (
        <ChatItem
          key={_id}
          _id={_id}
          lastMessage={lastMessage}
          name={name}
          urlImageProfile={urlImageProfile}
        />
      ))}
    </Box>
  );
};

export default ChatList;
