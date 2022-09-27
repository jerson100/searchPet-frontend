import React from "react";
import { Formik, Form } from "formik";
import LostPetsSelect from "../LostPetsSelect";
import { Button } from "@mui/material";
import JeInputTextError from "../JeInputTextError/JeInputTextError";
import DropZoneImage from "../DropZoneImage/DropZoneImage";

const names = [
  { name: "Oliver Hansen", value: "Oliver Hansen" },
  { name: "Van Henry", value: "Van Henry" },
  { name: "April Tucker", value: "April Tucker" },
  { name: "Ralph Hubbard", value: "Ralph Hubbard" },
  { name: "Omar Alexander", value: "Omar Alexander" },
  { name: "Carlos Abbott", value: "Carlos Abbott" },
  { name: "Miriam Wagner", value: "Miriam Wagner" },
  { name: "Bradley Wilkerson", value: "Bradley Wilkerson" },
  { name: "Virginia Andrews", value: "Virginia Andrews" },
  { name: "Kelly Snyder", value: "Kelly Snyder" },
];

const LostPetRequestForm = () => {
  return (
    <Formik
      initialValues={{
        pets: [],
        description: "",
        images: [],
        location: null,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ touched, errors, values, setFieldValue }) => (
        <Form>
          <LostPetsSelect
            name="pets"
            inputLabel="Mascotas"
            fullWidth
            error={touched.pets && !!errors.pets}
            selectItems={names}
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
            // error={touched.images && !!errors.images}
            files={values.images}
            setFieldValue={setFieldValue}
            title="Imágenes"
            multiple
            name="images"
          />
          <Button
            sx={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
            variant="contained"
            type="submit"
          >
            Generar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LostPetRequestForm;
