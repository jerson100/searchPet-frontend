import React, { useCallback } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import LostPetList from "../../../components/common/LostPetList";
import { Helmet } from "react-helmet";
import { useGetLostPet } from "../../../hooks/useGetLostPet";
import LostPetDistanceForm from "../../../components/common/LostPetDistanceForm";

const LostPetsView = () => {
  const { lostPets, loading, isNext, nextPage, getLostPetsByUserLocation } =
    useGetLostPet(null, 1, 5);
  const handleChangeMaxDistance = useCallback(
    (distance, location) => {
      getLostPetsByUserLocation(location, distance);
    },
    [getLostPetsByUserLocation]
  );

  return (
    <>
      <Helmet>
        <title>Mascotas perdidas | SPet</title>
        <meta name="description" content="Máscotas perdidas" />
        <meta name="author" content="Jerson Omar Ramírez Ortiz" />
      </Helmet>
      <Container
        sx={{
          p: { xs: 0, sm: 3 },
          pt: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3 },
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={8} lg={7}>
            {/* {error ? (
              <Typography paragraph>
                Ocurrió un problema al momento de obtener los registros, vuelve
                a intentarlo más tarde
              </Typography>
            ) : (
              <LostPetList items={data} loading={loading} />
            )} */}
            <LostPetList
              items={lostPets}
              loading={loading}
              isNext={isNext}
              handleNextPage={nextPage}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <Box
              bgcolor={"background.paper"}
              p={2}
              border="solid 1px"
              borderColor="divider"
              position={"sticky"}
              top={89}
            >
              <LostPetDistanceForm
                loading={loading}
                handleChangeMaxDistance={handleChangeMaxDistance}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LostPetsView;
