import { Box } from "@mui/material";
import React from "react";
import Comment from "../Comment";

const CommentList = ({ comments, handleDelete, loading = false }) => {
  return (
    <Box>
      {loading ? (
        <>
          <Comment loading />
          <Comment loading />
          <Comment loading />
        </>
      ) : (
        <>
          {comments?.map((c) => (
            <Comment
              key={c._id}
              user={c.user}
              _id={c._id}
              description={c.description}
              createdAt={c.createdAt}
              animate={c.animateAddNewComment}
              locations={c.locations}
              handleDelete={handleDelete}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default CommentList;
