import { Box } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import useMessageContext from "../../../../../hooks/useMessageContext";
import MessageItem from "../MessageItem";

const MessageList = () => {
  const { messages, loadingGetMessages } = useMessageContext();
  const { user } = useAuthContext();
  const refContainerList = useRef();

  useEffect(() => {
    // setTimeout(() => {
    refContainerList.current?.scrollTo({
      behavior: "smooth",
      top: refContainerList.current.scrollHeight,
    });
    // }, 1);
  }, [messages]);

  return (
    <Box
      sx={{ listStyle: "none", margin: 0, padding: 0 }}
      component="ul"
      flex={"1 0 0"}
      overflow="auto"
      ref={refContainerList}
    >
      {loadingGetMessages ? (
        <>
          <MessageItem loading isMyMessage />
          <MessageItem loading />
          <MessageItem loading />
          <MessageItem loading isMyMessage />
          <MessageItem loading />
        </>
      ) : (
        messages.map((message) => (
          <MessageItem
            key={message._id}
            {...message}
            isMyMessage={user.user._id === message.sender._id}
          />
        ))
      )}
    </Box>
  );
};

export default MessageList;
