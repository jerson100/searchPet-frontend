import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import React from "react";
import { useMemo } from "react";
import JeSelectError from "../../../../../components/common/JeSelectError";
import { LoadingButton } from "@mui/lab";
import { FilterContainerStyle } from "./Filter.style";

const Filter = ({ loadingTypePets, typePets, settypePet, typePet }) => {
  const dataTypePets = useMemo(() => {
    return typePets?.map((t) => ({
      name: t.type,
      value: t.type,
    }));
  }, [typePets]);

  const existParamTypePet = useMemo(
    () =>
      typePets?.filter((t) => t.type === typePet).length > 0 ? typePet : "",
    [typePet, typePets]
  );

  const handleSubmit = (values) => {
    settypePet(values.typepet);
  };

  return (
    <FilterContainerStyle>
      <Formik
        initialValues={{ typepet: existParamTypePet }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {() => (
          <Form>
            <Box mb={2}>
              {loadingTypePets ? (
                <Skeleton height={"40px"} />
              ) : (
                <JeSelectError
                  fullWidth
                  name={"typepet"}
                  selectItems={dataTypePets}
                  inputLabel="Tipo de mascota"
                />
              )}
            </Box>
            {loadingTypePets ? (
              <Skeleton width={88} height={"37px"} />
            ) : (
              <LoadingButton type="submit" variant="contained">
                Filtrar
              </LoadingButton>
            )}
          </Form>
        )}
      </Formik>
    </FilterContainerStyle>
  );
};

export default React.memo(Filter);
