import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo } from "react";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { NotificationContainerStyle } from "./notification.style";
import { getTweetPublicationDate } from "../../../../../utils/date";

const Notification = ({
  username,
  urlImageProfile,
  content,
  path,
  handleClick,
  seen = false,
  idNotification,
  createdAt,
}) => {
  const timeMemo = useMemo(() => {
    return getTweetPublicationDate(new Date(createdAt));
  }, [createdAt]);
  return (
    <li>
      <NotificationContainerStyle
        onClick={() => handleClick(path, idNotification)}
        component={"article"}
        isSeen={seen}
        sx={{
          pl: 3,
          pt: 2,
          pr: 1,
          pb: 2,
        }}
      >
        <Box>
          <Avatar
            alt={username}
            src={urlImageProfile}
            sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography whiteSpace={"break-spaces"} variant="body2">
            {content}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ mr: "12px" }}>
            {timeMemo}
          </Typography>
          <div>
            <IconButton color="primary" aria-label="ver acciones">
              <MoreHoriz />
            </IconButton>
          </div>
        </Box>
      </NotificationContainerStyle>
    </li>
  );
};

export default Notification;
