import React, { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Container, Grid } from "@mui/material";
import PetList from "../../../components/common/PetList";
import Filter from "./components/Filter";
import { useEffect } from "react";

const PetsView = () => {
  const [params, setParams] = useSearchParams();
  const [typePet, settypePet] = useState(params.get("typepet"));
  const [page, setPage] = useState(1);

  const [{ data: responseTypePets, loading: loadingTypePets }] = useAxios({
    url: "/typePets",
  });

  useEffect(() => {
    const queryP = {};
    if (typePet) queryP.typepet = typePet;
    setParams(queryP, { replace: true });
  }, [typePet, setParams]);

  const handleNextPage = useCallback(() => {
    setPage((p) => p + 1);
  }, [setPage]);

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
            setPage={setPage}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <PetList
            typePet={typePet}
            page={page}
            handleNextPage={handleNextPage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetsView;
