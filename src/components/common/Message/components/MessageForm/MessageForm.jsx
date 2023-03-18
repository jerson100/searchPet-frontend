import { IconButton, Skeleton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Send as SendIcon, Photo as PhotoIcon } from "@mui/icons-material";
import useChatContext from "../../../../../hooks/useChatContext";
import useMessageContext from "../../../../../hooks/useMessageContext";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { loadingGetMessages, addNewMessage, loadingNewMessage } =
    useMessageContext();
  const { loadingChats } = useChatContext();
  const handleChange = ({ target: { value } }) => {
    setMessage(value);
  };
  const handleClick = async () => {
    addNewMessage({ text: message });
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 1,
        p: 2,
      }}
    >
      <Box>
        {loadingChats | loadingGetMessages ? (
          <Skeleton variant="rectangular" height="40px" />
        ) : (
          <TextField
            type="text"
            variant="outlined"
            value={message}
            onChange={handleChange}
            fullWidth
            size="small"
            placeholder="Escribe algo..."
          />
        )}
      </Box>

      {loadingChats | loadingGetMessages ? (
        <>
          <Skeleton variant="circular" sx={{ width: "40px", height: "40px" }} />
          <Skeleton variant="circular" sx={{ width: "40px", height: "40px" }} />
        </>
      ) : (
        <>
          <IconButton size="small">
            <PhotoIcon />
          </IconButton>
          <IconButton size="small" onClick={handleClick}>
            <SendIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default MessageForm;
