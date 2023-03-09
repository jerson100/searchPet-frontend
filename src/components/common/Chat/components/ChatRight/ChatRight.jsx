import { Avatar, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useChatContext from "../../../../../hooks/useChatContext";
import NoSelectedChat from "../NoSelectedChat";

const ChatRight = () => {
  const { currentChat } = useChatContext();
  return (
    <Paper>
      {!currentChat ? (
        <NoSelectedChat />
      ) : (
        <>
          <Header currentChat={currentChat} />
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
        <Typography
          variant="body2"
          sx={{ marginBottom: ".25rem" }}
          fontWeight="bold"
        >
          {email}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatRight;
