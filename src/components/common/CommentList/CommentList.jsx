import { Box, Typography } from "@mui/material";
import React from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import AddCommentForm from "../AddCommentForm";
import Comment from "../Comment";

const CommentList = () => {
  const { user } = useAuthContext();
  return (
    <Box
      bgcolor={"background.paper"}
      border="solid 1px"
      borderColor={"divider"}
      p={2}
    >
      <Typography variant="h5" component="h2" mb={3} id="comments">
        Comentarios
      </Typography>
      <Box>
        <AddCommentForm user={user} />
        {[0, 1, 2, 3, 4].map((c) => (
          <Comment key={c} />
        ))}
      </Box>
    </Box>
  );
};

export default CommentList;
