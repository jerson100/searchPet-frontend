import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  ImageProfileContainerStyle,
  PetItemStyle,
  ImgProfileStyle,
} from "./petItem.style";
import NotFoundPet from "../../../assets/img/webp/notFoundPet.webp";

const PetListItem = ({ loading, name, urlImageProfile, breed }) => {
  if (loading) return <PetListItemLoading />;
  return (
    <PetItemStyle>
      <ImageProfileContainerStyle>
        <ImgProfileStyle
          notfound={urlImageProfile}
          src={urlImageProfile || NotFoundPet}
          alt={name}
        />
        {!!!urlImageProfile && (
          <Typography variant="body" component="p">
            Sin imagen
          </Typography>
        )}
      </ImageProfileContainerStyle>
      <Box p={2}>
        <Grid container spacing={2} mb={1}>
          <Grid item xs={5}>
            <Typography variant="body" component="p" fontWeight={"700"}>
              Nombre:
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body" component="p">
              {name}
            </Typography>
          </Grid>
        </Grid>
        {breed?.typePet?.type && (
          <Grid container spacing={2} mb={1}>
            <Grid item xs={5}>
              <Typography variant="body" component="p" fontWeight={"700"}>
                Tipo de mascota:
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body" component="p">
                {breed.typePet.type}
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid container spacing={2} mb={1}>
          <Grid item xs={5}>
            <Typography variant="body" component="p" fontWeight={"700"}>
              Propietario:
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <IconButton LinkComponent={Link} to="/">
              <Avatar
                alt={name}
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </PetItemStyle>
  );
};

const PetListItemLoading = () => {
  return (
    <Box sx={{ border: "solid  1px rgba(0,0,0,.15)" }}>
      <Skeleton variant="rectangular" sx={{ height: "150px" }} />
      <Box sx={{ padding: "1rem 1rem" }}>
        <Stack flexDirection={"row"}>
          <Skeleton sx={{ mr: 1, height: "30px", width: "80px" }} />
          <Skeleton sx={{ mr: 1, height: "30px", width: "120px" }} />
        </Stack>
        <Stack flexDirection={"row"}>
          <Skeleton sx={{ mr: 1, height: "30px", width: "80px" }} />
          <Skeleton sx={{ mr: 1, height: "30px", width: "120px" }} />
        </Stack>
        <Stack flexDirection={"row"}>
          <Skeleton sx={{ mr: 1, height: "30px", width: "80px" }} />
          <Skeleton
            variant="circular"
            sx={{ mt: 2, height: "40px", width: "40px" }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default React.memo(PetListItem);
