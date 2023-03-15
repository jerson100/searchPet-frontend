import { Avatar, Paper, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useChatContext from "../../../../../hooks/useChatContext";
import Message from "../../../Message";
import MessageForm from "../../../MessageForm";
import NoSelectedChat from "../NoSelectedChat";

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
          <MessageForm loadingChats={loadingChats} />
        </>
      )}
    </Paper>
  );
};

const Header = ({ currentChat, loadingChats }) => {
  const { name, urlImageProfile, email } = currentChat;
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
            <Typography variant="body2">{email}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ChatRight;
