import { Box } from "@mui/material";
import React from "react";
import Comment from "../Comment";

const CommentList = ({ comments }) => {
  return (
    <Box>
      {comments.map((c) => (
        <Comment
          key={c._id}
          user={c.user}
          description={c.description}
          createdAt={c.createdAt}
        />
      ))}
    </Box>
  );
};

export default CommentList;
