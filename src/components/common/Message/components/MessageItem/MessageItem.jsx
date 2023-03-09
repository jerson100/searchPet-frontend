import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const MessageItem = ({
  room,
  _id,
  sender,
  createdAt,
  updatedAt,
  text,
  image,
  cords,
  seen,
  isMyMessage = false,
}) => {
  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        justifyContent: isMyMessage ? "flex-end" : "flex-start",
      }}
      pl={2}
      pr={2}
      mb={2}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMyMessage ? "row" : "row-reverse",
        }}
        gap={1}
      >
        <Box
          sx={{
            display: "Flex",
            flexDirection: "column",
            alignItems: isMyMessage ? "flex-end" : "flex-start",
          }}
        >
          <Typography
            variant="body2"
            component="p"
            sx={{
              maxWidth: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              background: isMyMessage ? "#1565c033" : "rgba(0, 0, 0,0.21)",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
            }}
          >
            {text}
          </Typography>
          <Typography variant="caption" component="p" color="text.secondary">
            1h
          </Typography>
        </Box>
        <Avatar
          alt={sender.name}
          src={sender.urlImageProfile}
          sx={{ width: { xs: 35, md: 35 }, height: { xs: 35, md: 35 } }}
        />
      </Box>
    </Box>
  );
};

export default MessageItem;
