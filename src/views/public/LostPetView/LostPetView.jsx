import useAxios from "axios-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import LostPetItem from "../../../components/common/LostPetItem";
import LostPetLocation from "./components/LostPetLocation";

const LostPetView = () => {
  const params = useParams();
  const idDesktop = useMediaQuery((x) => {
    return x.breakpoints.up("md");
  });
  const [{ loading, data: lostPet, error }] = useAxios({
    url: `/lostpet/${params.idLostPet}`,
    method: "GET",
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
        </>
      )}
    </Container>
  );
};

export default LostPetView;
