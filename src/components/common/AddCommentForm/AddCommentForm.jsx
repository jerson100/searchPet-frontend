import { LoadingButton } from "@mui/lab";
import { Alert, Avatar, Box, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import ButtonAcceder from "../ButtonAcceder/ButtonAcceder";
import JeInputTextError from "../JeInputTextError/JeInputTextError";

const AddCommentForm = ({ user }) => {
  return (
    <>
      {user?.user ? (
        <Box mb={2} pl={2} pt={2} pb={2}>
          <Formik
            initialValues={{
              comment: "",
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar src={user.user.urlImageProfile} alt="user" />
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
        </Box>
      ) : (
        <Box mb={2}>
          <Alert variant="outlined" severity="info">
            <Typography paragraph>
              Para poder realizar comentarios necesita iniciar sesión.
            </Typography>
            <ButtonAcceder logued={false} />
          </Alert>
        </Box>
      )}
    </>
  );
};

export default AddCommentForm;
