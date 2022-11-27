import { Box, Typography } from "@mui/material";
import React from "react";
import AddCommentForm from "../../../../../components/common/AddCommentForm";
import CommentList from "../../../../../components/common/CommentList";
import useLostPetComments from "../../../../../hooks/useLostPetComments";

const LostPetComments = ({ idLostPet }) => {
  const {
    addComment,
    deleteComment,
    loadingCreateComment,
    comments,
    loadingComments,
  } = useLostPetComments(idLostPet);
  return (
    <Box
      bgcolor={"background.paper"}
      border="solid 1px"
      borderColor={"divider"}
      component="section"
      p={2}
    >
      <Typography variant="h5" component="h2" mb={3} id="comments">
        Comentarios
      </Typography>
      {!loadingComments && (
        <AddCommentForm
          addComment={addComment}
          loadingComment={loadingCreateComment}
        />
      )}
      <CommentList
        comments={comments}
        handleDelete={deleteComment}
        loading={loadingComments}
      />
    </Box>
  );
};

export default LostPetComments;
