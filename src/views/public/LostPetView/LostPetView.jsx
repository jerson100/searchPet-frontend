import React from "react";
import useAxios from "axios-hooks";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import LostPetList from "../../../components/common/LostPetList";

const LostPetView = () => {
  const [{ loading, data }] = useAxios(
    {
      url: "/lostpet",
      params: {
        length: 100000,
      },
    },
    { manual: false }
  );
  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Container sx={{ padding: { xs: "0", sm: 3 } }}>
          <Grid container>
            <Grid item xs={12} md={8} lg={7}>
              <LostPetList items={data} />
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              Example
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default LostPetView;
