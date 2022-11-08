import { LoadingButton } from "@mui/lab";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LostPetItem from "../LostPetItem";

const LostPetList = ({ items, loading, isNext, handleNextPage }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
      {loading && !items?.length ? (
        <LoadingLostPetList />
      ) : (
        <>
          {items.map((item) => (
            <Grid item xs={12} key={item._id}>
              <LostPetItem
                createdAt={item.createdAt}
                description={item.description}
                images={item.images}
                pets={item.pets}
                located={item.located}
                user={item.user}
                _id={item._id}
              />
            </Grid>
          ))}
          {isNext && (
            <Box display="flex" justifyContent="center" mt={2}>
              <LoadingButton
                loading={loading}
                variant="contained"
                onClick={handleNextPage}
              >
                Next
              </LoadingButton>
            </Box>
          )}
        </>
      )}
    </Grid>
  );
};

const LoadingLostPetList = () => {
  return (
    <>
      <Grid item xs={12}>
        <LostPetItem loading />
      </Grid>
      <Grid item xs={12}>
        <LostPetItem loading />
      </Grid>
      <Grid item xs={12}>
        <LostPetItem loading />
      </Grid>
    </>
  );
};

export default LostPetList;
