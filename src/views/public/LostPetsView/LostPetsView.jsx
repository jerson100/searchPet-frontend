import React, { useMemo } from "react";
import { Box, Grid, Container } from "@mui/material";
import { Helmet } from "react-helmet";
import L from "leaflet";
import LostPetList from "../../../components/common/LostPetList";
import { useGetLostPet } from "../../../hooks/useGetLostPet";
import LostPetDistanceForm from "../../../components/common/LostPetDistanceForm";
import PointsInMap from "./components/PointsInMap/PointsInMap";

const LostPetsView = () => {
  const { lostPets, loading, isNext, nextPage, getLostPetsByUserLocation } =
    useGetLostPet();

  const points = useMemo(() => {
    return lostPets?.map(
      ({
        location: { coordinates },
        pets,
        user: { username, urlImageProfile },
        _id,
      }) => {
        return {
          _id,
          location: [coordinates[1], coordinates[0]],
          description: `Se perdieron las mascotas: ${pets
            .map((p) => p.name)
            .join(", ")} de ${username}`,
          icon: new L.Icon({
            iconUrl:
              urlImageProfile ||
              "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
            iconRetinaUrl:
              urlImageProfile ||
              "https://www.goredforwomen.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg",
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            iconSize: new L.Point(30, 30),
            className: "leaflet-div-icon",
          }),
        };
      }
    );
  }, [lostPets]);

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
          <Grid item xs={12} md={6} lg={6} sx={{ order: { xs: 2, md: 1 } }}>
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
          <Grid item xs={12} md={6} lg={6} sx={{ order: { xs: 1, md: 2 } }}>
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
                handleChangeMaxDistance={getLostPetsByUserLocation}
              />
              <Box sx={{ height: "50vh" }}>
                <PointsInMap points={points} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LostPetsView;
