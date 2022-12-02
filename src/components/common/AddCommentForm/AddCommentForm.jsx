import React, { useMemo } from "react";
import { LoadingButton } from "@mui/lab";
import { Alert, Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import ButtonAcceder from "../ButtonAcceder/ButtonAcceder";
import JeInputTextError from "../JeInputTextError/JeInputTextError";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { CreateLostPetCommentSchema } from "../../../api/lostPet.validation";
import { useState } from "react";
import SelectPointModal from "./components/SelectPointModal";
import Map from "../Map";
import { Marker } from "react-leaflet";

const AddCommentForm = ({ addComment, loadingComment }) => {
  const [showShareLocationModal, setShowShareLocationModal] = useState(false);
  const [points, setPoints] = useState([]);

  return (
    <Box
      sx={{ borderBottom: (prop) => `solid 1px ${prop.palette.divider}` }}
      mb={2}
    >
      <FormContent
        addComment={addComment}
        points={points}
        setPoints={setPoints}
        loadingComment={loadingComment}
        setShowShareLocationModal={setShowShareLocationModal}
      />
      <PreviewMap points={points} />
      <SelectPointModal
        showShareLocationModal={showShareLocationModal}
        setShowShareLocationModal={setShowShareLocationModal}
        points={points}
        setPoints={setPoints}
      />
    </Box>
  );
};

const PreviewMap = ({ points }) => {
  const pointsM = useMemo(() => {
    return points.map((p, i) => ({
      position: p,
      icon: new L.Icon({
        iconUrl: "/animalMark.png",
        iconRetinaUrl: "/animalMark.png",
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(40, 40),
      }),
    }));
  }, [points]);
  return (
    <>
      {pointsM.length > 0 && (
        <Box sx={{ height: "200px" }} mb={2}>
          <Map
            center={[-11.1167582, -77.3009863]}
            zoom={9}
            fullscreenControl={false}
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
          >
            {pointsM.map((p, i) => (
              <Marker key={i} position={p.position} icon={p.icon}></Marker>
            ))}
            <Map.AnimatePoints points={points} />
          </Map>
        </Box>
      )}
    </>
  );
};

const FormContent = ({
  addComment,
  loadingComment,
  points,
  setPoints,
  setShowShareLocationModal,
}) => {
  const { user } = useAuthContext();
  return (
    <>
      {user?.user ? (
        <Box pl={2} pt={2} pb={2}>
          <Formik
            initialValues={{
              description: "",
            }}
            validationSchema={CreateLostPetCommentSchema}
            onSubmit={async ({ description }, { resetForm }) => {
              console.log(points);
              await addComment(description, points);
              setPoints([]);
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
                      error={touched.description && !!errors.description}
                      inputLabel={"Tu comentario"}
                      rows={3}
                      sx={{ marginTop: 0, mb: 2 }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() => setShowShareLocationModal(true)}
                      >
                        Referencia
                      </Button>
                      <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={loadingComment}
                        // sx={{ display: "block", marginLeft: "auto" }}
                      >
                        Comentar
                      </LoadingButton>
                    </Box>
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
