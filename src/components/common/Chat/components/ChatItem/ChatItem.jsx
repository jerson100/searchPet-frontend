import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ChatItemContainerStyle } from "./chatItem.style";

const ChatItem = ({
  urlImageProfile,
  name,
  lastMessage,
  _id,
  handleClick,
  email,
  isSelected = false,
}) => {
  const _handleClick = () => {
    handleClick({
      urlImageProfile,
      name,
      lastMessage,
      _id,
      handleClick,
      email,
    });
  };
  return (
    <ChatItemContainerStyle
      elevation={2}
      onClick={_handleClick}
      isselected={isSelected.toString()}
    >
      <Box display="flex" gap="1rem">
        <Box>
          <Avatar
            alt={name}
            src={urlImageProfile}
            sx={{ width: { xs: 40, md: 55 }, height: { xs: 40, md: 55 } }}
          />
        </Box>
        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          overflow={"hidden"}
        >
          <Typography
            variant="body2"
            sx={{ marginBottom: ".25rem" }}
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Box display={"flex"}>
            <Box flexGrow={1} mr={2} overflow={"hidden"}>
              <Typography
                component="p"
                variant="caption"
                whiteSpace="nowrap"
                overflow={"hidden"}
                textOverflow="ellipsis"
              >
                {lastMessage?.text}
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                variant="caption"
                color="text.secondary"
                whiteSpace={"nowrap"}
              >
                {lastMessage?.createdAt}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChatItemContainerStyle>
  );
};

export default React.memo(ChatItem);
