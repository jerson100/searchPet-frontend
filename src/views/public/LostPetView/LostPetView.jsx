import useAxios from "axios-hooks";
import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LostPetItem from "../../../components/common/LostPetItem";

const LostPetView = () => {
  const params = useParams();
  const [{ loading, data: lostPet, error }] = useAxios({
    url: `/lostpet/${params.idLostPet}`,
    method: "GET",
  });
  return (
    <Container
      sx={{
        p: { xs: 0, sm: 3 },
        pt: { xs: 2, sm: 3 },
        pb: { xs: 2, sm: 3 },
      }}
    >
      {loading ? (
        <Typography paragraph>Cargando...</Typography>
      ) : (
        <>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} md={5} lg={4}>
              <LostPetItem
                _id={lostPet._id}
                createdAt={lostPet.createdAt}
                description={lostPet.description}
                images={lostPet.images}
                located={lostPet.located}
                pets={lostPet.pets}
                user={lostPet.user}
              />
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Box
                bgcolor={"background.paper"}
                border="solid 1px"
                borderColor={"divider"}
                height="100%"
              ></Box>
            </Grid>
          </Grid>
          <Box
            bgcolor={"background.paper"}
            border="solid 1px"
            borderColor={"divider"}
            height="200px"
          ></Box>
        </>
      )}
    </Container>
  );
};

export default LostPetView;
