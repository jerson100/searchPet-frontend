import React, { useState, useCallback } from "react";
import { Box, Button, Grid } from "@mui/material";
import JeInputTextError from "../JeInputTextError";
import { DescriptionOutlined } from "@mui/icons-material";
import JeSelectError from "../JeSelectError";
import DropZoneImage from "../DropZoneImage";

const AddPetForm = () => {
  const [urlImageProfile, seturlImageProfile] = useState(null);
  const [imagesPet, setimagesPet] = useState(null);
  const [dataForm, setDataForm] = useState({
    breed: "",
    size: "",
    name: "",
    eyeColor: "",
    hairColor: "",
    description: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDataForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={{ md: 2 }}>
        <Grid item xs={12} md={6}>
          <JeInputTextError
            inputLabel={"Nombre"}
            fullWidth
            value={dataForm.name}
            handleChange={handleChange}
            name={"name"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <JeSelectError
            Icon={DescriptionOutlined}
            inputLabel={"Raza"}
            fullWidth
            name={"breed"}
            value={dataForm.breed}
            handleChange={handleChange}
            selectItems={[
              { name: "Pequeño", value: "102" },
              { name: "Mediano", value: "103" },
              { name: "Grande", value: "104" },
            ]}
          />
        </Grid>
      </Grid>
      <Grid container spacing={{ md: 2 }}>
        <Grid item xs={12} md={4}>
          <JeSelectError
            inputLabel={"Tamaño"}
            fullWidth
            name={"size"}
            value={dataForm.size}
            handleChange={handleChange}
            selectItems={[
              { name: "Pequeño", value: "102" },
              { name: "Mediano", value: "103" },
              { name: "Grande", value: "104" },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <JeInputTextError
            inputLabel={"Color de ojos"}
            fullWidth
            value={dataForm.eyeColor}
            handleChange={handleChange}
            name={"eyeColor"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <JeInputTextError
            inputLabel={"Color de pelo"}
            fullWidth
            value={dataForm.hairColor}
            handleChange={handleChange}
            name={"hairColor"}
          />
        </Grid>
      </Grid>
      <JeInputTextError
        inputLabel={"Descripción"}
        fullWidth
        value={dataForm.description}
        handleChange={handleChange}
        multiline
        rows={5}
        name={"description"}
      />
      <Grid container spacing={{ md: 2 }} mb={3}>
        <Grid item xs={12} md={12}>
          <DropZoneImage
            files={urlImageProfile}
            setfiles={seturlImageProfile}
            title="Imagen de perfil"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <DropZoneImage
            files={imagesPet}
            setfiles={setimagesPet}
            title="Imágenes"
            multiple
          />
        </Grid>
      </Grid>
      <Box display={"flex"} justifyContent="center">
        <Button type="submit" variant="contained">
          Agregar
        </Button>
      </Box>
    </Box>
  );
};

export default AddPetForm;
