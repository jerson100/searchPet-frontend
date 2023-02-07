import React from "react";
import { Helmet } from "react-helmet";
// import { Typography, Container, Box, Grid } from "@mui/material";
import AddPetForm from "../../../components/common/AddPetForm";
import JeSection from "../../../components/common/JeSection";

const AddPetView = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Mascota | Spet</title>
        <meta name="description" content="Agregar nueva mascota" />
      </Helmet>
      <JeSection
        component={"div"}
        title={"Agregar Mascota"}
        maxWidth={"md"}
        backgroundColor="inherit"
      >
        <AddPetForm />
      </JeSection>
    </>
  );
};

export default AddPetView;
