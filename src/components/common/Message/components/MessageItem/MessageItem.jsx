import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { getTweetPublicationDate } from "../../../../../utils/date";

const MessageItem = React.memo(
  ({
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
    const formatedDate = useMemo(() => {
      return getTweetPublicationDate(new Date(createdAt));
    }, [createdAt]);

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
          gap={2}
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
                <Box
                  sx={{
                    position: "relative",
                    mb: "3px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      right: isMyMessage ? "-8px" : "100%",
                      top: "calc(35px / 2)",
                      transform: `translateY(-50%) rotate(${
                        isMyMessage ? 0 : "180"
                      }deg)`,
                      borderLeft: `8px solid ${
                        isMyMessage ? "#1565c033" : "rgba(0, 0, 0,0.21)"
                      }`,
                      borderTop: "8px solid transparent",
                      borderBottom: "8px solid transparent",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      maxWidth: "180px",
                      background: isMyMessage
                        ? "#1565c033"
                        : "rgba(0, 0, 0,0.21)",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  component="p"
                  color="text.secondary"
                >
                  {formatedDate}
                </Typography>
              </>
            )}
          </Box>
          {loading ? (
            <Skeleton variant="circular" sx={{ width: 35, height: 35 }} />
          ) : (
            <Box
              component={Link}
              to={`/users/${sender._id}`}
              sx={{ alignSelf: "flex-start" }}
            >
              <Avatar
                alt={sender.name}
                src={sender.urlImageProfile}
                sx={{ width: 35, height: 35 }}
              />
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);

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
