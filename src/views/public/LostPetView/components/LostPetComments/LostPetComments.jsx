import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AddCommentForm from "../../../../../components/common/AddCommentForm";
import CommentList from "../../../../../components/common/CommentList";
import useLostPetComments from "../../../../../hooks/useLostPetComments";

const LostPetComments = ({ idLostPet, idAuthorPost }) => {
  const {
    addComment,
    deleteComment,
    loadingCreateComment,
    comments,
    loadingComments,
  } = useLostPetComments(idLostPet, idAuthorPost);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      border="solid 1px"
      borderColor={"divider"}
      bgcolor="background.default"
      component="section"
      boxSizing="border-box"
      minHeight={isMobile && "100vh"}
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
