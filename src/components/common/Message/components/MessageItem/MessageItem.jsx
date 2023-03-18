import { Avatar, Box, Skeleton, Typography } from "@mui/material";
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
  loading = false,
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
          {loading ? (
            <>
              <Skeleton
                variant="text"
                sx={{ width: "100px", height: "20px", mb: 1 }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "40px", height: "20px", mb: 1 }}
              />
            </>
          ) : (
            <>
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
              <Typography
                variant="caption"
                component="p"
                color="text.secondary"
              >
                1h
              </Typography>
            </>
          )}
        </Box>
        {loading ? (
          <Skeleton
            variant="circular"
            sx={{ width: { xs: 35, md: 35 }, height: { xs: 35, md: 35 } }}
          />
        ) : (
          <Avatar
            alt={sender.name}
            src={sender.urlImageProfile}
            sx={{ width: { xs: 35, md: 35 }, height: { xs: 35, md: 35 } }}
          />
        )}
      </Box>
    </Box>
  );
};

const Loading = ({ isMyMessage }) => {
  return (
    <Box>
      <Skeleton />
      <Skeleton
        variant="circular"
        sx={{ width: { xs: 35, md: 35 }, height: { xs: 35, md: 35 } }}
      />
    </Box>
  );
};

MessageItem.Loading = Loading;

export default MessageItem;
