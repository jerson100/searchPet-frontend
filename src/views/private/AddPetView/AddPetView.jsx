import React from "react";
// import { Typography, Container, Box, Grid } from "@mui/material";
import AddPetForm from "../../../components/common/AddPetForm";
import JeSection from "../../../components/common/JeSection";

const AddPetView = () => {
  return (
    <JeSection component={"div"} title={"Agregar Mascota"} maxWidth={"md"}>
      <AddPetForm />
    </JeSection>
  );
};

export default AddPetView;
