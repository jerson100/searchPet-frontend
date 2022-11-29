import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/system";
import useMyLocationGps from "../../../hooks/useMyLocationGps";

const LostPetDistanceForm = ({ loading, handleChangeMaxDistance }) => {
  const { location } = useMyLocationGps();
  const [maxD, setMaxD] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleChangeMaxDistance(maxD, location);
  };

  return (
    <section>
      <Typography variant="h5" component="h1" mb={2}>
        Filtrar por:
      </Typography>
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
            <FormControlLabel value="5000" control={<Radio />} label="5K" />
            <FormControlLabel value="10000" control={<Radio />} label="20k" />
            <FormControlLabel value="30000" control={<Radio />} label="30k" />
            <FormControlLabel value="40000" control={<Radio />} label="40k" />
            <FormControlLabel value="50000" control={<Radio />} label="50k" />
          </RadioGroup>
          <Box display="flex" justifyContent="center">
            <LoadingButton type="submit" variant="contained" loading={loading}>
              Filtrar
            </LoadingButton>
          </Box>
        </FormControl>
      </form>
    </section>
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
