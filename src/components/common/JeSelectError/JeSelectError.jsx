import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";
import { MenuItem, Select } from "@mui/material";
import { ErrorMessage, Field } from "formik";

const JeSelectError = ({
  required,
  fullWidth,
  variant,
  name,
  size,
  inputLabel,
  selectItems,
  error,
}) => {
  return (
    <FormControl
      required={required}
      fullWidth={fullWidth}
      variant={variant}
      margin="normal"
    >
      <Field
        as={Select}
        labelId={name}
        id={name}
        size={size}
        name={name}
        error={error}
        label={inputLabel}
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
      </Field>
      <InputLabel size="small" htmlFor={name}>
        {inputLabel}
      </InputLabel>
      <ErrorMessage
        name={name}
        render={(msg) => <FormHelperText>{msg}</FormHelperText>}
      />
    </FormControl>
  );
};

JeSelectError.propTypes = {
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  inputLabel: PropTypes.string,
  selectItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  error: PropTypes.bool,
};

JeSelectError.defaultProps = {
  required: false,
  fullWidth: false,
  variant: "outlined",
  name: "",
  size: "small",
  inputLabel: "",
  error: false,
};

export default React.memo(JeSelectError);
