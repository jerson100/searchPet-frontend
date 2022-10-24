import React, { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Container, Grid } from "@mui/material";
import PetList from "../../../components/common/PetList";
import Filter from "./components/Filter";
import { Helmet } from "react-helmet";
import { usePets } from "../../../hooks/usePets";
import { useAuthContext } from "../../../hooks/useAuthContext";

const PetsView = () => {
  const [params, setParams] = useSearchParams();
  const { user } = useAuthContext();
  const [typePet, settypePet] = useState(params.get("typepet"));
  const [{ data: responseTypePets, loading: loadingTypePets }] = useAxios({
    url: "/typePets",
  });

  const {
    isNext,
    loading: loadingGetPets,
    pets,
    handleNext,
    setPage,
    page,
  } = usePets(`/pets`, typePet, 1, 2);

  const handleSubmit = useCallback((values) => {
    setPage(1);
    settypePet(values.typepet);
  }, []);

  useEffect(() => {
    const queryP = {};
    if (typePet) queryP.typepet = typePet;
    setParams(queryP, { replace: true });
  }, [typePet, setParams]);

  return (
    <>
      <Helmet>
        <title>Mascotas | Spet</title>
        <meta
          name="description"
          content="Mira todas las mascotas de los usuarios"
        />
      </Helmet>
      <Container
        sx={{
          pl: { xs: 0, md: 3 },
          pr: { xs: 0, md: 3 },
          pt: 4,
          pb: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Filter
              loadingTypePets={loadingTypePets}
              typePets={responseTypePets}
              typePet={typePet}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            {page === 1 && loadingGetPets ? (
              <PetList.Loading />
            ) : (
              <PetList
                component="section"
                title="Lista de Mascotas"
                isNext={isNext}
                loading={loadingGetPets}
                pets={pets}
                typePet={typePet}
                page={page}
                handleNext={handleNext}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PetsView;
