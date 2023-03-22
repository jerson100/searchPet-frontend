import { IconButton, Skeleton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo, useState } from "react";
import { Send as SendIcon, Photo as PhotoIcon } from "@mui/icons-material";
import useChatContext from "../../../../../hooks/useChatContext";
import useMessageContext from "../../../../../hooks/useMessageContext";
import io from "../../../../../configs/socket";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import debounceFunction from "../../../../../utils/debouncefunction";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { loadingGetMessages, addNewMessage } = useMessageContext();
  const { user } = useAuthContext();
  const { loadingChats, currentChat } = useChatContext();

  const handleChange = ({ target: { value } }) => {
    setMessage(value);
    handleKeyUpDebounce();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMessage({ text: message });
    setMessage("");
  };

  const handleKeyUpDebounce = useMemo(() => {
    return debounceFunction(
      () => {
        io.emit("typing", {
          room: currentChat._id,
          user: {
            username: user.user.username,
            _id: user.user._id,
          },
        });
      },
      () => {
        io.emit("stop-typing", {
          room: currentChat._id,
          user: {
            username: user.user.username,
            _id: user.user._id,
          },
        });
      },
      800
    );
  }, [user, currentChat]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 1,
        p: 2,
      }}
      component={"form"}
      onSubmit={handleSubmit}
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
            // onKeyUp={handleKeyUpDebounce}
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
          <IconButton type="submit" size="small">
            <SendIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default MessageForm;
