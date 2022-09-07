import React from "react";
import { Formik, Form } from "formik";
import { Box, Grid, Skeleton } from "@mui/material";
import { DescriptionOutlined } from "@mui/icons-material";
import JeInputTextError from "../JeInputTextError";
import JeSelectError from "../JeSelectError";
import useAxios from "axios-hooks";
import { useMemo } from "react";
import { AUTH_TOKEN } from "../../../configs/localstorage";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { useSnackbar } from "notistack";

const sizes = [
  { name: "Pequeño", value: "Pequeño" },
  { name: "Mediano", value: "Mediano" },
  { name: "Grande", value: "Grande" },
];

const AddPetForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [{ loading, response }] = useAxios({
    method: "GET",
    url: "/breeds",
  });
  const [{ loading: loadingCreatePet }, createNewPet] = useAxios(
    {
      method: "POST",
    },
    {
      manual: true,
    }
  );

  const createPet = async ({
    breed,
    size,
    name,
    eyeColor,
    hairColor,
    description,
  }) => {
    const token = AUTH_TOKEN.get();
    try {
      await createNewPet({
        headers: {
          authorization: `Bearer ${token}`,
        },
        url: "/pets",
        data: {
          name: name,
          breed: breed,
          description: description,
          characteristics: {
            size: size,
            eyeColor: eyeColor,
            hairColor: hairColor,
          },
        },
      });
      enqueueSnackbar("Mascota creada satisfactoriamente", {
        variant: "success",
      });
    } catch (e) {
      if (e.status === 401) {
        window.location.href = "/";
      } else {
        enqueueSnackbar(e.message, {
          variant: "error",
        });
      }
    }
  };

  const breeds = useMemo(() => {
    return response?.map((breed) => ({
      value: breed._id,
      name: breed.name,
    }));
  }, [response]);

  return (
    <>
      <Formik
        initialValues={{
          breed: "",
          size: "",
          name: "",
          eyeColor: "",
          hairColor: "",
          description: "",
        }}
        validate={(values) => {
          return validate(values);
        }}
        onSubmit={async (values, { resetForm }) => {
          await createPet(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={{ md: 2 }}>
              <Grid item xs={12} md={6}>
                <JeInputTextError
                  error={touched.name && !!errors.name}
                  inputLabel={"Nombre*"}
                  fullWidth
                  name="name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {loading ? (
                  <Skeleton
                    sx={{ marginTop: "16px", marginBottom: "8px" }}
                    variant="rounded"
                    height={40}
                  />
                ) : (
                  <JeSelectError
                    error={touched.breed && !!errors.breed}
                    Icon={DescriptionOutlined}
                    inputLabel={"Raza*"}
                    fullWidth
                    name="breed"
                    selectItems={breeds}
                  />
                )}
              </Grid>
            </Grid>
            <Grid container spacing={{ md: 2 }}>
              <Grid item xs={12} md={4}>
                <JeSelectError
                  error={touched.size && !!errors.size}
                  inputLabel={"Tamaño*"}
                  fullWidth
                  name="size"
                  selectItems={sizes}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <JeInputTextError
                  error={touched.eyeColor && !!errors.eyeColor}
                  inputLabel={"Color de ojos"}
                  fullWidth
                  name="eyeColor"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <JeInputTextError
                  error={touched.hairColor && !!errors.hairColor}
                  inputLabel={"Color de pelo"}
                  fullWidth
                  name="hairColor"
                />
              </Grid>
            </Grid>
            <JeInputTextError
              error={touched.description && !!errors.description}
              inputLabel="Descripción"
              fullWidth
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
              {loading ? (
                <Skeleton variant="rounded" height={40} width={120} />
              ) : (
                <LoadingButton
                  startIcon={<SaveIcon />}
                  loadingPosition="start"
                  loading={loadingCreatePet}
                  type="submit"
                  variant="contained"
                >
                  Agregar
                </LoadingButton>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

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
  } else if (name && !/^[a-z ]{2,40}$/i.test(name)) {
    errors.name = "El nombre debe contener solo letras, min 2 y max 40.";
  }
  if (eyeColor && !/^[a-z ]{2,40}$/i.test(eyeColor)) {
    errors.eyeColor =
      "El color de ojos debe contener solo letras, min 2 y max 40.";
  }
  if (hairColor && !/^[a-z ]{2,40}$/i.test(hairColor)) {
    errors.hairColor =
      "El color del pelo debe contener solo letras, min 2 y max 40.";
  }
  if (description?.length > 400) {
    errors.description =
      "La descripción no puede contener más de 400 carácteres.";
  }
  return errors;
};

export default AddPetForm;
