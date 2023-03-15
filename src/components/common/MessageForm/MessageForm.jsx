import { IconButton, Skeleton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Send as SendIcon, Photo as PhotoIcon } from "@mui/icons-material";

const MessageForm = ({ loadingChats }) => {
  const [message, setMessage] = useState("");
  const handleChange = ({ target: { value } }) => {
    setMessage(value);
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
        {loadingChats ? (
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

      {loadingChats ? (
        <>
          <Skeleton variant="circular" sx={{ width: "40px", height: "40px" }} />
          <Skeleton variant="circular" sx={{ width: "40px", height: "40px" }} />
        </>
      ) : (
        <>
          <IconButton size="small">
            <PhotoIcon />
          </IconButton>
          <IconButton size="small">
            <SendIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default MessageForm;
