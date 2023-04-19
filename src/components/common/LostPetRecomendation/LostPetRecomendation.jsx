import React from "react";
import { Button, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import LostPetList from "../LostPetList/LostPetList";

const LostPetRecomendation = ({ idLostPet }) => {
  const [{ loading, data, error }] = useAxios(
    {
      url: "/lostpets?length=3&page=1",
    },
    { useCache: false }
  );
  const dataFilter = useMemo(() => {
    const dataF = data?.filter((d) => d._id !== idLostPet);
    return dataF && dataF.length > 2 ? dataF.slice(0, 2) : dataF;
  }, [data, idLostPet]);

  return (
    <Box
      sx={{
        padding: "1rem",
        borderColor: "divider",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
      component="section"
      backgroundColor={"background.paper"}
    >
      <Typography variant="h5" mb={2}>
        Otras mascotas Perdidas
      </Typography>
      {error ? (
        <Typography paragraph>
          Ocurrió un error, vuelva a intentarlo más tarde.
        </Typography>
      ) : !loading && data?.length === 0 ? (
        <Typography paragraph>No hay máscotas perdidas</Typography>
      ) : (
        <>
          <LostPetList items={dataFilter} loading={loading} />
          <Button
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "max-content",
              display: "block",
            }}
            variant="contained"
            LinkComponent={Link}
            to="/pets/lost"
          >
            Ver más
          </Button>
        </>
      )}
    </Box>
  );
};

export default LostPetRecomendation;
