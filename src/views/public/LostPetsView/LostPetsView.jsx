import React from "react";
import useAxios from "axios-hooks";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import LostPetList from "../../../components/common/LostPetList";
import { Helmet } from "react-helmet";

const LostPetsView = () => {
  const [{ loading, data, error }] = useAxios(
    {
      url: "/lostpet",
      params: {
        length: 100000,
      },
    },
    { manual: false, useCache: false }
  );
  return (
    <>
      <Helmet>
        <title>Mascotas perdidas | SPet</title>
        <meta name="description" content="Máscotas perdidas" />
        <meta name="author" content="Jerson Omar Ramírez Ortiz" />
      </Helmet>
      <Container
        sx={{
          p: { xs: 0, sm: 3 },
          pt: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3 },
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={8} lg={7}>
            {error ? (
              <Typography paragraph>
                Ocurrió un problema al momento de obtener los registros, vuelve
                a intentarlo más tarde
              </Typography>
            ) : (
              <LostPetList items={data} loading={loading} />
            )}
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <Box
              bgcolor={"background.paper"}
              p={2}
              border="solid 1px"
              borderColor="divider"
              position={"sticky"}
              top={89}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              hic quis ab maiores dolore enim minima, consectetur, eos qui at
              magnam libero laborum fuga fugiat eum pariatur odio modi
              similique.
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LostPetsView;
