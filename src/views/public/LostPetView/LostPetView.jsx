import React from "react";
import { Grid, Skeleton, useMediaQuery, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import LostPetItem from "../../../components/common/LostPetItem";
import LostPetLocation from "./components/LostPetLocation";
import useLostPet from "../../../hooks/useLostPet";
import NotFound from "../../../components/common/NotFound/NotFound";
import LostPetComments from "./components/LostPetComments";

const LostPetView = () => {
  const params = useParams();
  const { loadingLostPet, lostPet } = useLostPet(params.idLostPet);

  const idDesktop = useMediaQuery((x) => {
    return x.breakpoints.up("md");
  });

  if (!loadingLostPet && !lostPet) {
    return <NotFound />;
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
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={5}>
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
          </Grid>
          {idDesktop && (
            <Grid item xs={12} md={7}>
              {loadingLostPet ? (
                <>
                  <Skeleton variant="rectangular" height={"100%"} />
                </>
              ) : (
                <LostPetLocation
                  position={lostPet.location}
                  image={lostPet.user.urlImageProfile}
                />
              )}
            </Grid>
          )}
        </Grid>
        <LostPetComments idLostPet={lostPet?._id} />
      </>
    </Container>
  );
};

export default LostPetView;
