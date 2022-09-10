import { Container, Grid } from "@mui/material";
import React from "react";
import PetList from "../../../components/common/PetList";
import Filter from "./components/Filter";

const PetsView = () => {
  return (
    <Container sx={{ pt: "3rem", pb: "3rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Filter />
        </Grid>
        <Grid item xs={12} md={8}>
          <PetList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetsView;
