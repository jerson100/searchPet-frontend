import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import useAxios from "axios-hooks";
import PetListItem from "../PetListItem";
import { PetListContainerStyle } from "./petList.style";
import { LoadingButton } from "@mui/lab";

const PetList = ({ typePet, page, handleNextPage }) => {
  const [loading, setLoadingPets] = useState(true);
  const [pets, setpets] = useState([]);
  const [isNext, setIsNext] = useState(false);

  const [, getPets] = useAxios(
    {
      method: "GET",
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    setLoadingPets(true);
    const controller = new AbortController();
    const api = async () => {
      try {
        const data = await getPets(
          {
            url: `/pets/?page=${page}&length=2${
              typePet ? `&typepet=${typePet}` : ""
            }`,
            signal: controller.signal,
          },
          { useCache: true }
        );
        setIsNext(data.data.length > 0);
        if (page === 1) {
          setpets(data.data);
        } else {
          if (data.data.length > 0) {
            setpets((previousPet) => [...previousPet, ...data.data]);
          }
        }
        setLoadingPets(false);
      } catch (e) {
        if (e.code !== "ERR_CANCELED") {
          setLoadingPets(false);
        }
      }
    };
    api();
    return () => {
      controller.abort();
      setLoadingPets(false);
    };
  }, [typePet, getPets, page]);

  return (
    <PetListContainerStyle component={"section"}>
      <Typography variant="h4" component="h1" mb={2}>
        Lista de mascotas
      </Typography>
      {page === 1 && loading ? (
        <PetListLoading />
      ) : (
        <>
          <GridPets pets={pets} />
          {isNext && (
            <Box display="flex" justifyContent={"center"}>
              <LoadingButton
                loading={page > 1 && loading}
                onClick={handleNextPage}
                variant="contained"
              >
                Ver más
              </LoadingButton>
            </Box>
          )}
        </>
      )}
    </PetListContainerStyle>
  );
};

const GridPets = React.memo(({ pets }) => {
  return (
    <Grid container component="ul" spacing={2} sx={{ listStyle: "none", p: 0 }}>
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

export default React.memo(PetList);
