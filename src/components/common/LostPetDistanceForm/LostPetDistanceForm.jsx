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
  Slider,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useMyLocationGps from "../../../hooks/useMyLocationGps";

const marks = [
  {
    value: 0,
    label: "5km",
  },
  {
    value: 12,
    label: "25km",
  },
  {
    value: 25,
    label: "50km",
  },
  {
    value: 50,
    label: "100km",
  },
  {
    value: 75,
    label: "150km",
  },
  {
    value: 100,
    label: "200km",
  },
];

const LostPetDistanceForm = ({ loading, handleChangeMaxDistance }) => {
  const { location } = useMyLocationGps();
  const [maxD, setMaxD] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleChangeMaxDistance(
      marks.find((ma) => ma.value == maxD)?.label.replace("km", "") * 1000,
      location
    );
  };

  function valuetext(value) {
    return `${value}km`;
  }

  function valueLabelFormat(value) {
    return marks.find((mark) => mark.value === value).label;
  }

  console.log(maxD);

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
        <FormControl sx={{ width: "100%" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Distancia Máxima
          </FormLabel>
          <Box
            sx={{
              width: "calc(100% - 40px)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Slider
              aria-label="Restricted values"
              defaultValue={5000}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              onChange={(c, d) => setMaxD(d)}
              marks={marks}
              value={maxD}
            />
          </Box>

          {/* <RadioGroup
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
          </RadioGroup> */}
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
