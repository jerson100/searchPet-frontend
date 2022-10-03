import { Grid } from "@mui/material";
import React from "react";
import LostPetItem from "../LostPetItem";

const LostPetList = ({ items }) => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
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
    </Grid>
  );
};

export default LostPetList;
