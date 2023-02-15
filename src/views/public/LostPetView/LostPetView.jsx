import React from "react";
import {
  Grid,
  Skeleton,
  useMediaQuery,
  Container,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import LostPetItem from "../../../components/common/LostPetItem";
import LostPetLocation from "./components/LostPetLocation";
import useLostPet from "../../../hooks/useLostPet";
import ErrorPage from "../../../components/common/ErrorPage";
import LostPetComments from "./components/LostPetComments";
import Actions from "./components/Actions";
import LostPetRecomendation from "../../../components/common/LostPetRecomendation";
import { Box } from "@mui/system";

const LostPetView = () => {
  const params = useParams();
  const { loadingLostPet, lostPet } = useLostPet(params.idLostPet);

  const idDesktop = useMediaQuery((x) => {
    return x.breakpoints.up("md");
  });

  if (!loadingLostPet && !lostPet) {
    return (
      <ErrorPage
        msg="El registro de la mascota(as) no existe"
        buttonText="Ver todas las mascotas perdidas"
        to="/pets/lost"
      />
    );
  }
  return (
    <Container
      sx={{
        p: { xs: 0, sm: 3 },
        pt: { xs: 2, sm: 3 },
        pb: { xs: 2, sm: 3 },
      }}
    >
      <>
        <Typography variant="h5" component="h1" sx={{ display: "none" }}>
          Mascotas perdidas del usuario {lostPet?.user?.username}
        </Typography>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "sticky", top: "81px" }}>
              <LostPetItem
                loading={loadingLostPet}
                _id={lostPet?._id}
                createdAt={lostPet?.createdAt}
                description={lostPet?.description}
                images={lostPet?.images}
                located={lostPet?.located}
                pets={lostPet?.pets}
                user={lostPet?.user}
                isToPublication={false}
              />
            </Box>
          </Grid>
          {idDesktop ? (
            <Grid item xs={12} md={7}>
              {loadingLostPet ? (
                <>
                  <Skeleton variant="rectangular" height={"100%"} />
                </>
              ) : (
                <LostPetLocation
                  position={lostPet?.location?.coordinates}
                  image={lostPet?.user?.urlImageProfile}
                />
              )}
            </Grid>
          ) : (
            !loadingLostPet && (
              <Actions
                position={lostPet?.location?.coordinates}
                image={lostPet?.user?.urlImageProfile}
                idLostPet={lostPet?._id}
                idAuthorPost={lostPet?.user?._id}
              />
            )
          )}
        </Grid>
        {idDesktop && (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <LostPetComments
                  idLostPet={lostPet?._id}
                  idAuthorPost={lostPet?.user?._id}
                />
              </Grid>
              <Grid item xs={5}>
                <Box sx={{ position: "sticky", top: "81px" }}>
                  <LostPetRecomendation idLostPet={params.idLostPet} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </>
    </Container>
  );
};

export default LostPetView;
