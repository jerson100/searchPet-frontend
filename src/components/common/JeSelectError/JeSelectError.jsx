import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";
import { MenuItem, Select } from "@mui/material";

const JeSelectError = ({
  required,
  fullWidth,
  variant,
  name,
  size,
  value,
  handleChange,
  error,
  errorMessage,
  inputLabel,
  selectItems,
  handleBlur,
}) => {
  return (
    <FormControl
      required={required}
      fullWidth={fullWidth}
      variant={variant}
      margin="normal"
    >
      <Select
        labelId={name}
        id={name}
        size={size}
        name={name}
        value={value}
        onChange={handleChange}
        error={error || !!errorMessage}
        label={inputLabel}
        onBlur={handleBlur}
        sx={{
          backgroundColor: (theme) => {
            return theme.palette.background.paper;
          },
        }}
      >
        <MenuItem value="">
          <em>Ninguno</em>
        </MenuItem>
        {selectItems?.map(({ name, value }) => (
          <MenuItem key={value} value={value}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <InputLabel size="small" htmlFor={name}>
        {inputLabel}
      </InputLabel>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

JeSelectError.propTypes = {
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  inputLabel: PropTypes.string,
  selectItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  handleBlur: PropTypes.func,
};

JeSelectError.defaultProps = {
  required: false,
  fullWidth: false,
  variant: "outlined",
  name: "",
  size: "small",
  value: "",
  handleChange: () => {},
  error: false,
  errorMessage: "",
  inputLabel: "",
  handleBlur: null,
};

export default React.memo(JeSelectError);
