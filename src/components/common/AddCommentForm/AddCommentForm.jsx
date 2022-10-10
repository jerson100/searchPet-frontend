import React from "react";
import { LoadingButton } from "@mui/lab";
import { Alert, Avatar, Box, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import ButtonAcceder from "../ButtonAcceder/ButtonAcceder";
import JeInputTextError from "../JeInputTextError/JeInputTextError";
import { useAuthContext } from "../../../hooks/useAuthContext";

const AddCommentForm = ({ addComment, loadingComment }) => {
  const { user } = useAuthContext();
  return (
    <>
      {user?.user ? (
        <Box mb={2} pl={2} pt={2} pb={2}>
          <Formik
            initialValues={{
              description: "",
            }}
            onSubmit={async ({ description }, { resetForm }) => {
              await addComment(description);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar src={user.user.urlImageProfile} alt="user" />
                  </Grid>
                  <Grid item flex="auto">
                    <JeInputTextError
                      name="description"
                      fullWidth
                      multiline
                      error={touched.description && errors.description}
                      inputLabel={"Tu comentario"}
                      rows={3}
                      sx={{ marginTop: 0, mb: 2 }}
                    />
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      loading={loadingComment}
                      sx={{ display: "block", marginLeft: "auto" }}
                    >
                      Comentar
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Form>
            )}
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

AddCommentForm.propTypes = {
  addComment: PropTypes.func,
  loadingComment: PropTypes.bool,
};

AddCommentForm.defaultProps = {
  loadingComment: false,
};

export default AddCommentForm;
