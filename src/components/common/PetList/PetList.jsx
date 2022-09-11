import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PetListItem from "../PetListItem";
import { PetListContainerStyle } from "./petList.style";

const PetList = ({ pets, loading, handleButton }) => {
  return (
    <PetListContainerStyle component={"section"}>
      <Typography variant="h4" component="h1" mb={2}>
        Lista de mascotas
      </Typography>
      {loading && <PetListLoading />}
      {!loading && pets?.length > 0 && (
        <>
          {
            <Grid
              container
              component="ul"
              spacing={2}
              sx={{ listStyle: "none", p: 0 }}
            >
              {pets?.map((p) => (
                <Grid key={p._id} component="li" item xs={12} sm={6}>
                  <PetListItem
                    name={p.name}
                    urlImageProfile={p.urlImageProfile}
                    breed={p.breed}
                  />
                </Grid>
              ))}
            </Grid>
          }
          <Box display="flex" justifyContent={"center"}>
            <Button onClick={handleButton} variant="contained">
              Ver más
            </Button>
          </Box>
        </>
      )}
      {!loading && pets?.length === 0 && (
        <Typography variant="body" component="p">
          No se encontraron mascotas
        </Typography>
      )}
    </PetListContainerStyle>
  );
};

const PetListLoading = () => {
  return (
    <Grid container spacing={2} mb={2}>
      <Grid xs={12} md={6} item>
        <PetListItem loading />
      </Grid>
      <Grid xs={12} md={6} item>
        <PetListItem loading />
      </Grid>
      <Grid xs={12} md={6} item>
        <PetListItem loading />
      </Grid>
    </Grid>
  );
};

export default React.memo(PetList);
