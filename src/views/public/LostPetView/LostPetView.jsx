import useAxios from "axios-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import LostPetItem from "../../../components/common/LostPetItem";
import LostPetLocation from "./components/LostPetLocation";
import CommentList from "../../../components/common/CommentList";
import AddCommentForm from "../../../components/common/AddCommentForm";
import { useAuthContext } from "../../../hooks/useAuthContext";

const LostPetView = () => {
  const params = useParams();
  const { user } = useAuthContext();
  const idDesktop = useMediaQuery((x) => {
    return x.breakpoints.up("md");
  });
  const [{ loading, data: lostPet }] = useAxios({
    url: `/lostpet/${params.idLostPet}`,
    method: "GET",
  });
  const [{ loading: loadingComments, data: LostPetComments }] = useAxios({
    url: `lostpet/${params.idLostPet}/comments`,
  });
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
            <AddCommentForm user={user} />
            {loadingComments ? (
              <Typography paragraph>Cargando comentarios...</Typography>
            ) : (
              <CommentList comments={LostPetComments} />
            )}
          </Box>
        </>
      )}
    </Container>
  );
};

export default LostPetView;
