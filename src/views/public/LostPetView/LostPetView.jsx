import useAxios from "axios-hooks";
import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import LostPetItem from "../../../components/common/LostPetItem";
import LostPetLocation from "./components/LostPetLocation";
import CommentList from "../../../components/common/CommentList";
import AddCommentForm from "../../../components/common/AddCommentForm";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useSnackbar } from "notistack";
import { AUTH_TOKEN } from "../../../configs/localstorage";

const LostPetView = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const { user } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const idDesktop = useMediaQuery((x) => {
    return x.breakpoints.up("md");
  });

  const [{ loading, data: lostPet }] = useAxios({
    url: `/lostpet/${params.idLostPet}`,
    method: "GET",
  });

  const [{ loading: loadingComments, data: LostPetComments }] = useAxios(
    {
      url: `lostpet/${params.idLostPet}/comments`,
    },
    { useCache: false }
  );

  const [{ loading: loadingCreateComment }, createComment] = useAxios(
    { url: `lostpetcomments`, method: "POST" },
    { manual: true }
  );

  useEffect(() => {
    if (LostPetComments) setComments(LostPetComments);
  }, [LostPetComments]);

  const addComment = useCallback(
    async (description) => {
      try {
        const { data: newComment } = await createComment({
          data: { lostPet: lostPet._id, description },
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
          },
        });
        setComments((prev) => [
          { ...newComment, user: user.user, animateAddNewComment: true },
          ...prev,
        ]);
        enqueueSnackbar("Comentario creado", {
          variant: "success",
        });
      } catch (e) {
        if (e.status) {
          if (e.status === 401) {
            window.location.href = "/login";
          } else {
            enqueueSnackbar(e.message, { variant: "error" });
          }
        } else if (e.status !== 0) {
          enqueueSnackbar(
            "Ocurrió un error, puede volver a intentarlo más tarde",
            {
              variant: "error",
            }
          );
        }
      }
    },
    [lostPet, enqueueSnackbar, createComment, user?.user]
  );
  return (
    <Container
      sx={{
        p: { xs: 0, sm: 3 },
        pt: { xs: 2, sm: 3 },
        pb: { xs: 2, sm: 3 },
      }}
    >
      {loading ? (
        <Typography paragraph>Cargando...</Typography>
      ) : (
        <>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} md={5}>
              <LostPetItem
                _id={lostPet._id}
                createdAt={lostPet.createdAt}
                description={lostPet.description}
                images={lostPet.images}
                located={lostPet.located}
                pets={lostPet.pets}
                user={lostPet.user}
              />
            </Grid>
            {idDesktop && (
              <Grid item xs={12} md={7}>
                <LostPetLocation
                  position={lostPet.location}
                  image={lostPet.user.urlImageProfile}
                />
              </Grid>
            )}
          </Grid>
          <Box
            bgcolor={"background.paper"}
            border="solid 1px"
            borderColor={"divider"}
            p={2}
          >
            <Typography variant="h5" component="h2" mb={3} id="comments">
              Comentarios
            </Typography>
            <AddCommentForm
              user={user}
              addComment={addComment}
              loadingComment={loadingCreateComment}
            />
            {loadingComments ? (
              <Typography paragraph>Cargando comentarios...</Typography>
            ) : (
              <CommentList comments={comments} />
            )}
          </Box>
        </>
      )}
    </Container>
  );
};

export default LostPetView;
