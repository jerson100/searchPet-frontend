import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, Grid } from "@mui/material";
import { DescriptionOutlined } from "@mui/icons-material";
import JeInputTextError from "../JeInputTextError";
import JeSelectError from "../JeSelectError";

const validate = ({ breed, size, name, eyeColor, hairColor, description }) => {
  const errors = {};
  if (!breed) {
    errors.breed = "La raza no puede estar vacío.";
  }
  if (!size) {
    errors.size = "El tamaño no puede estar vacío.";
  }
  if (!name) {
    errors.name = "El nombre no puede estar vacío.";
  } else if (name && !/^[a-z]{2,40}$/i.test(name)) {
    errors.name = "El nombre debe contener solo letras, min 2 y max 40.";
  }
  if (eyeColor && !/^[a-z]{2,40}$/i.test(eyeColor)) {
    errors.eyeColor =
      "El color de ojos debe contener solo letras, min 2 y max 40.";
  }
  if (hairColor && !/^[a-z]{2,40}$/i.test(hairColor)) {
    errors.hairColor =
      "El color del pelo debe contener solo letras, min 2 y max 40.";
  }
  if (description?.length > 400) {
    errors.description =
      "La descripción no puede contener más de 400 carácteres.";
  }
  return errors;
};

const AddPetForm = () => {
  return (
    <Formik
      initialValues={{
        breed: "",
        size: "",
        name: "",
        eyeColor: "",
        hairColor: "",
        description: "",
      }}
      validate={(values) => validate(values)}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        console.log(values);
      }}
    >
      {({ errors, values, handleChange, handleBlur, touched }) => (
        <Form>
          <Grid container spacing={{ md: 2 }}>
            <Grid item xs={12} md={6}>
              <JeInputTextError
                inputLabel={"Nombre"}
                fullWidth
                value={values.name}
                handleChange={handleChange}
                name="name"
                errorMessage={touched.name && errors.name}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <JeSelectError
                Icon={DescriptionOutlined}
                inputLabel={"Raza"}
                fullWidth
                name="breed"
                value={values.breed}
                errorMessage={touched.breed && errors.breed}
                handleChange={handleChange}
                handleBlur={handleBlur}
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
                name="size"
                value={values.size}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorMessage={touched.size && errors.size}
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
                value={values.eyeColor}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorMessage={touched.eyeColor && errors.eyeColor}
                name="eyeColor"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <JeInputTextError
                inputLabel={"Color de pelo"}
                fullWidth
                value={values.hairColor}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorMessage={touched.hairColor && errors.hairColor}
                name="hairColor"
              />
            </Grid>
          </Grid>
          <JeInputTextError
            inputLabel="Descripción"
            fullWidth
            value={values.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errorMessage={touched.description && errors.description}
            multiline
            rows={5}
            name="description"
          />
          {/* <Grid container spacing={{ md: 2 }} mb={3}>
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
          </Grid> */}
          <Box display={"flex"} justifyContent="center">
            <Button type="submit" variant="contained">
              Agregar
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetForm;
