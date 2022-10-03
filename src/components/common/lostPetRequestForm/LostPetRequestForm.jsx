import React, { useMemo } from "react";
import { Formik, Form } from "formik";
import useAxios from "axios-hooks";
import { useNavigate } from "react-router-dom";
import LostPetsSelect from "../LostPetsSelect";
import { Button, Grid, Typography } from "@mui/material";
import JeInputTextError from "../JeInputTextError/JeInputTextError";
import DropZoneImage from "../DropZoneImage/DropZoneImage";
import Location from "../Location";
import { ValidatePetCreationRequestSchema } from "../../../api/pets.validation";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { AUTH_TOKEN } from "../../../configs/localstorage";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";

const LostPetRequestForm = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [{ data, loading }] = useAxios(
    {
      url: `/users/${user.user._id}/pets`,
    },
    {
      manual: false,
    }
  );

  const [{ loading: loadingCreateLostPet }, executeCreateLostPet] = useAxios(
    {
      url: "/lostpet",
      method: "POST",
      headers: {
        authorization: `Bearer ${AUTH_TOKEN.get()}`,
        "content-type": "multipart/form-data",
      },
    },
    { manual: true }
  );

  const myPets = useMemo(() => {
    return data?.map(({ name, _id, urlImageProfile }) => ({
      name: _id,
      value: name,
      urlImageProfile: urlImageProfile,
    }));
  }, [data]);

  return (
    <>
      {loading ? (
        <p>Cargando mascotas...</p>
      ) : !data?.length ? (
        <>
          <Typography component="p" mb={2}>
            Primero necesita agregar mascotas para poder continuar.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/my-pet/add")}>
            Ir a agregar mascotas
          </Button>
        </>
      ) : (
        <Formik
          initialValues={{
            pets: [],
            description: "",
            images: [],
            location: null,
          }}
          validationSchema={ValidatePetCreationRequestSchema}
          onSubmit={async (
            { description, images, location, pets },
            { resetForm }
          ) => {
            if (!(location?.length > 1)) {
              enqueueSnackbar("Location es requerido", {
                variant: "error",
              });
              return;
            }
            const formData = new FormData();
            formData.append("description", description);
            images.forEach((image) => {
              formData.append("images", image, image.path);
            });
            formData.append("longitude", location[0]);
            formData.append("latitude", location[1]);
            formData.append("pets", pets);
            try {
              await executeCreateLostPet({
                data: formData,
              });
              resetForm();
              enqueueSnackbar("Solicitud creada exitosamente.", {
                variant: "success",
              });
            } catch (e) {
              if (e.status) {
                enqueueSnackbar(e.message, { variant: "error" });
              }
            }
          }}
        >
          {({ touched, errors, values, setFieldValue }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <LostPetsSelect
                    name="pets"
                    inputLabel="Mascotas"
                    fullWidth
                    error={touched.pets && !!errors.pets}
                    selectItems={myPets}
                  />
                  <JeInputTextError
                    name="description"
                    inputLabel="Descripción"
                    fullWidth
                    error={touched.description && !!errors.description}
                    multiline
                    rows={6}
                  />
                  <DropZoneImage
                    files={values.images}
                    setFieldValue={setFieldValue}
                    title="Imágenes"
                    multiple
                    name="images"
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Location
                    location={values.location}
                    setFieldValue={setFieldValue}
                    name="location"
                  />
                </Grid>
              </Grid>
              <LoadingButton
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                variant="contained"
                type="submit"
                loading={loadingCreateLostPet}
              >
                Generar
              </LoadingButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default LostPetRequestForm;