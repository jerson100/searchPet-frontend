import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import JeInputTextError from "../JeInputTextError/JeInputTextError";

const AddCommentForm = ({ user }) => {
  return (
    <Box mb={2} pl={2} pt={2} pb={2}>
      {user?.user ? (
        <Formik
          initialValues={{
            comment: "",
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item>
                <Avatar src="" alt="user" />
              </Grid>
              <Grid item flex="auto">
                <JeInputTextError
                  name="comment"
                  fullWidth
                  multiline
                  inputLabel={"Tu comentario"}
                  rows={3}
                  sx={{ marginTop: 0, mb: 2 }}
                />
                <LoadingButton
                  variant="contained"
                  sx={{ display: "block", marginLeft: "auto" }}
                >
                  Comentar
                </LoadingButton>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      ) : (
        <Box>
          <Typography paragraph>
            Necesita iniciar sesión para poder realizar comentarios.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default AddCommentForm;
