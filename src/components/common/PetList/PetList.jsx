import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import PetListItem from "../PetListItem";
import { PetListContainerStyle } from "./petList.style";
import { LoadingButton } from "@mui/lab";

const PetList = React.memo(
  ({
    component = "section",
    bordered = true,
    title,
    isNext,
    pets,
    loading,
    page,
    handleNext,
  }) => {
    return (
      <PetListContainerStyle
        component={component}
        bordered={bordered ? "true" : "false"}
      >
        {title && (
          <Typography variant="h4" component="h1" mb={2}>
            Lista de mascotas
          </Typography>
        )}
        <GridPets pets={pets} />
        {isNext && (
          <Box display="flex" justifyContent={"center"}>
            <LoadingButton
              loading={page > 1 && loading}
              onClick={handleNext}
              variant="contained"
            >
              Ver más
            </LoadingButton>
          </Box>
        )}
      </PetListContainerStyle>
    );
  }
);

const GridPets = React.memo(({ pets }) => {
  return (
    <Grid container component="ul" spacing={2} sx={{ listStyle: "none", p: 0 }}>
      {pets?.map((p) => (
        <Grid key={p._id} component="li" item xs={12} sm={6}>
          <PetListItem
            _id={p._id}
            name={p.name}
            urlImageProfile={p.urlImageProfile}
            breed={p.breed}
            user={p.user}
          />
        </Grid>
      ))}
    </Grid>
  );
});

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

PetList.Loading = PetListLoading;

export default PetList;
