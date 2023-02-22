import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { NotificationContainerStyle } from "./notification.style";

const Notification = ({
  username,
  urlImageProfile,
  content,
  path,
  handleClick,
  seen = false,
}) => {
  return (
    <li>
      <NotificationContainerStyle
        onClick={() => handleClick(path)}
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
          <Typography variant="caption">10 minutos</Typography>
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
