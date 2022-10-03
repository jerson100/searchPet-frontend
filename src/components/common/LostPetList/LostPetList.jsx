import { Box } from "@mui/material";
import React from "react";
import LostPetItem from "../LostPetItem";

const LostPetList = ({ items }) => {
  return (
    <Box mt={2}>
      {items.map((item) => (
        <LostPetItem
          key={item._id}
          createdAt={item.createdAt}
          description={item.description}
          images={item.images}
          pets={item.pets}
          located={item.located}
          user={item.user}
          _id={item._id}
        />
      ))}
    </Box>
  );
};

export default LostPetList;
