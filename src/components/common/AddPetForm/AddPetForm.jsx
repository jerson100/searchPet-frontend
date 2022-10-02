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
import { ValidatePetCreationSchema } from "../../../api/pets.validation";
import DropZoneImage from "../DropZoneImage/DropZoneImage";

const sizes = [
  { name: "Pequeño", value: "Pequeño" },
  { name: "Mediano", value: "Mediano" },
  { name: "Grande", value: "Grande" },
];

const AddPetForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [{ data, loading }] = useAxios({
    method: "GET",
    url: "/breeds",
  });
  const [{ loading: loadingCreatePet }, createNewPet] = useAxios(
    {
      headers: {
        authorization: `Bearer ${AUTH_TOKEN.get()}`,
        "content-type": "multipart/form-data",
      },
      url: "/pets",
      method: "POST",
    },
    {
      manual: true,
    }
  );

  const createPet = async (
    { breed, size, name, eyeColor, hairColor, description, profile },
    resetForm
  ) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("breed", breed);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("eyeColor", eyeColor);
    formData.append("hairColor", hairColor);
    console.log(profile && profile.length);
    if (profile && profile.length) {
      formData.append("profile", profile[0], profile[0].path);
    }
    try {
      await createNewPet({ data: formData });
      resetForm();
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
    return data?.map((breed) => ({
      value: breed._id,
      name: breed.name,
    }));
  }, [data]);

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
          profile: [],
        }}
        validationSchema={ValidatePetCreationSchema}
        onSubmit={async (values, { resetForm }) => {
          await createPet(values, resetForm);
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
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
            <Grid item xs={12} md={12}>
              <DropZoneImage
                files={values.profile}
                setFieldValue={setFieldValue}
                title="Imagen de perfil"
                name="profile"
              />
            </Grid>
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

export default AddPetForm;
