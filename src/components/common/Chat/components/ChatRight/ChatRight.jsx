import { Avatar, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useChatContext from "../../../../../hooks/useChatContext";
import Message from "../../../Message";
import MessageForm from "../../../MessageForm";
import NoSelectedChat from "../NoSelectedChat";

const ChatRight = () => {
  const { currentChat } = useChatContext();
  return (
    <Paper component={Box} sx={{ display: "flex", flexDirection: "column" }}>
      {!currentChat ? (
        <NoSelectedChat />
      ) : (
        <>
          <Header currentChat={currentChat} />
          <Message room={currentChat._id} />
          <MessageForm />
        </>
      )}
    </Paper>
  );
};

const Header = ({ currentChat }) => {
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
      <Avatar
        alt={name}
        src={urlImageProfile}
        sx={{ width: { xs: 40, md: 55 }, height: { xs: 40, md: 55 } }}
      />
      <Box>
        <Typography
          variant="body2"
          sx={{ marginBottom: ".25rem" }}
          fontWeight="bold"
        >
          {name}
        </Typography>
        <Typography variant="body2">{email}</Typography>
      </Box>
    </Box>
  );
};

export default ChatRight;
