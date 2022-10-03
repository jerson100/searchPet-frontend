import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Box, Grid, Link, Typography } from "@mui/material";
import ImageGrid from "./components/ImageGrid";
import PetsList from "./components/PetsList";
import LostPetItemHeader from "./components/LostPetItemHeader";
import { ContainerStyle } from "./lostPetItem.style";

const LostPetItem = ({
  createdAt,
  description,
  images,
  pets,
  located,
  user,
  _id,
}) => {
  return (
    <ContainerStyle>
      <Box p={2}>
        <LostPetItemHeader user={user} createdAt={createdAt} />
        <Typography paragraph>{description}</Typography>
        <PetsList pets={pets} />
      </Box>
      <Box
        sx={{
          marginLeft: { xs: "-1px", sm: "0" },
          marginRight: { xs: "-1px", sm: "0" },
        }}
      >
        <ImageGrid images={images} />
      </Box>
      <Grid container p={2} justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Link
            variant="link"
            underline="hover"
            component={LinkRouter}
            color="text.secondary"
            to={`/pets/lost/${_id}`}
          >
            Ir a la publicación
          </Link>
        </Grid>
        {/* <Grid item>
          <Link
            underline="hover"
            component={LinkRouter}
            to={`/pets/lost/${_id}#comments`}
            color="text.secondary"
          >
            698 comentarios
          </Link>
        </Grid> */}
      </Grid>
    </ContainerStyle>
  );
};

export default React.memo(LostPetItem);
