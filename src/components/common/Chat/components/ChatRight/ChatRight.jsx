import { Avatar, Paper, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useChatContext from "../../../../../hooks/useChatContext";
import Message from "../../../Message";
import NoSelectedChat from "../NoSelectedChat";
import io from "../../../../../configs/socket";

const ChatRight = () => {
  const { currentChat, loadingChats } = useChatContext();
  return (
    <Paper component={Box} sx={{ display: "flex", flexDirection: "column" }}>
      {!currentChat ? (
        <NoSelectedChat />
      ) : (
        <>
          <Header currentChat={currentChat} loadingChats={loadingChats} />
          <Message room={currentChat._id} loadingChats={loadingChats} />
        </>
      )}
    </Paper>
  );
};

const Header = ({ currentChat, loadingChats }) => {
  const { name, urlImageProfile } = currentChat;
  return (
    <Box
      sx={{
        height: "64px",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "1rem",
        p: 2,
      }}
    >
      {loadingChats ? (
        <Skeleton
          animation="wave"
          variant="circular"
          sx={{ width: { xs: 40, md: 55 }, height: { xs: 40, md: 55 } }}
        />
      ) : (
        <Avatar
          alt={name}
          src={urlImageProfile}
          sx={{ width: { xs: 40, md: 55 }, height: { xs: 40, md: 55 } }}
        />
      )}
      <Box>
        {loadingChats ? (
          <>
            <Skeleton animation="wave" height={10} width="40%" sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={10} width="30%" />
          </>
        ) : (
          <>
            <Typography
              variant="body2"
              sx={{ marginBottom: ".25rem" }}
              fontWeight="bold"
            >
              {name}
            </Typography>
            <UserTypings />
          </>
        )}
      </Box>
    </Box>
  );
};

const UserTypings = () => {
  const [userTyping, setUserTyping] = useState([]);

  useEffect(() => {
    io.on("typing", ({ username }) => {
      setUserTyping((prev) =>
        prev.find((p) => p === username) ? prev : [...prev, username]
      );
    });
    io.on("stop-typing", ({ username }) => {
      setUserTyping((prev) => prev.filter((us) => us !== username));
    });
    return () => {
      setUserTyping([]);
      io.off("typing");
      io.off("stop-typing");
    };
  }, []);

  return (
    <Typography variant="body2">
      {userTyping.length ? `${userTyping.join(", ")} está escribiendo...` : ""}
    </Typography>
  );
};

export default ChatRight;
