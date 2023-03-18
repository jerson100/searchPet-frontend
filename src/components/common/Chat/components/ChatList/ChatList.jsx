import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import useChatContext from "../../../../../hooks/useChatContext";
import ChatItem from "../ChatItem";

const ChatList = () => {
  const { chats, selectChat, loadingChats, currentChat } = useChatContext();
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
      {loadingChats ? (
        <>
          <ItemLoading mb />
          <ItemLoading mb />
          <ItemLoading mb />
          <ItemLoading mb />
          <ItemLoading />
        </>
      ) : (
        chats.map((chat, i) => (
          <ChatItem
            key={chat._id}
            {...chat}
            handleClick={selectChat}
            isSelected={currentChat?._id === chat._id}
          />
        ))
      )}
    </Box>
  );
};

const ItemLoading = ({ mb = true }) => {
  return (
    <Box display={"flex"} gap={2} mb={mb ? 2 : 0} pl={2} pr={2}>
      <Skeleton
        animation="wave"
        variant="circular"
        sx={{ width: { xs: 40, md: 55 }, height: { xs: 40, md: 55 } }}
      />
      <Stack flex="1">
        <Skeleton animation="wave" height={10} width="40%" sx={{ mb: 1 }} />
        <Skeleton animation="wave" height={10} width="30%" />
      </Stack>
    </Box>
  );
};

export default ChatList;
