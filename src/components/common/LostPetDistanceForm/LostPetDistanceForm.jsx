import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useMyLocationGps from "../../../hooks/useMyLocationGps";

const LostPetDistanceForm = ({ loading, handleChangeMaxDistance }) => {
  const { location } = useMyLocationGps();
  const [maxD, setMaxD] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleChangeMaxDistance(maxD, location);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h5" component="h1" mb={2}>
        Filtrar por:
      </Typography>
      {!location && (
        <Alert
          variant="outlined"
          severity="warning"
          sx={{ mb: 2 }}
          mb={2}
          style={{ marginBottom: "1rem" }}
        >
          Por favor, active su geolocalización para poder filtrar
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Distancia Máxima
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={maxD}
            onChange={(evt, value) => setMaxD(value)}
          >
            <FormControlLabel value="5000" control={<Radio />} label="5Km" />
            <FormControlLabel value="10000" control={<Radio />} label="10km" />
            <FormControlLabel value="30000" control={<Radio />} label="30km" />
            <FormControlLabel value="50000" control={<Radio />} label="50km" />
            <FormControlLabel value="80000" control={<Radio />} label="80km" />
            <FormControlLabel
              value="100000"
              control={<Radio />}
              label="100km"
            />
            <FormControlLabel
              value="200000"
              control={<Radio />}
              label="200km"
            />
          </RadioGroup>
          <Box display="flex" justifyContent="center">
            <LoadingButton
              disabled={!location}
              type="submit"
              variant="contained"
              loading={loading}
            >
              Filtrar
            </LoadingButton>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

LostPetDistanceForm.propTypes = {
  loading: PropTypes.bool,
  handleChangeMaxDistance: PropTypes.func,
  maxDistance: PropTypes.string,
};

LostPetDistanceForm.defaultProps = {
  loading: false,
  maxDistance: "",
};

export default LostPetDistanceForm;
