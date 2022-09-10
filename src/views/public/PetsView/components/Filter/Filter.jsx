import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import JeSelectError from "../../../../../components/common/JeSelectError";

const Filter = () => {
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
  };
  return (
    <Paper sx={{ padding: 2, position: "sticky", top: "81px" }}>
      <Formik initialValues={{ typePet: "" }} onSubmit={handleSubmit}>
        {() => (
          <>
            <Box mb={2}>
              <JeSelectError
                fullWidth
                name={"typePet"}
                selectItems={[{ name: "a", value: "c" }]}
                inputLabel="Tipo de mascota"
              />
            </Box>
            <Button type="submit" variant="contained">
              Filtrar
            </Button>
          </>
        )}
      </Formik>
    </Paper>
  );
};

export default Filter;
