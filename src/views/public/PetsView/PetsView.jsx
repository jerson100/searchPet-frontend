import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Container, Grid } from "@mui/material";
import PetList from "../../../components/common/PetList";
import Filter from "./components/Filter";
import { useEffect } from "react";

const PetsView = () => {
  const [params, setParams] = useSearchParams();
  const [typePet, settypePet] = useState(params.get("typepet"));

  const [{ data: responseTypePets, loading: loadingTypePets }] = useAxios({
    url: "/typePets",
  });

  const [loadingPets, setLoadingPets] = useState(true);

  const [{ data: responsePets }, getPets] = useAxios(
    {
      method: "GET",
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    const queryP = {};
    if (typePet) queryP.typepet = typePet;
    setParams(queryP, { replace: true });
  }, [typePet, setParams]);

  useEffect(() => {
    setLoadingPets(true);
    const controller = new AbortController();
    const api = async () => {
      try {
        await getPets(
          {
            url: `/pets${typePet ? `?typepet=${typePet}` : ""}`,
            signal: controller.signal,
            cancelToken: true,
          },
          { useCache: true }
        );
        setLoadingPets(false);
      } catch (e) {
        if (e.code !== "ERR_CANCELED") {
          setLoadingPets(false);
        }
      }
    };
    api();
    return () => {
      controller.abort();
      setLoadingPets(false);
    };
  }, [typePet, getPets]);

  return (
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
            settypePet={settypePet}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <PetList pets={responsePets} loading={loadingPets} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetsView;
