import React from "react";
import { ErrorMessage, Field } from "formik";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";

const JeInputTextError = ({
  required,
  fullWidth,
  variant,
  name,
  size,
  type,
  Icon,
  inputLabel,
  autoComplete,
  multiline,
  rows,
  error,
  ...props
}) => {
  return (
    <FormControl
      required={required}
      fullWidth={fullWidth}
      variant={variant}
      margin="normal"
      {...props}
    >
      <Field
        as={OutlinedInput}
        id={name}
        type={type}
        size={size}
        name={name}
        error={error}
        autoComplete={autoComplete}
        multiline={multiline}
        rows={rows}
        sx={{
          backgroundColor: (theme) => {
            return theme.palette.background.paper;
          },
        }}
        endAdornment={
          Icon && (
            <InputAdornment position="start">
              <IconButton aria-label="toggle password visibility" edge="end">
                <Icon />
              </IconButton>
            </InputAdornment>
          )
        }
        label={inputLabel}
      />
      <InputLabel size="small" htmlFor={name}>
        {inputLabel}
      </InputLabel>
      <ErrorMessage name={name}>
        {(msg) => <FormHelperText>{msg}</FormHelperText>}
      </ErrorMessage>
    </FormControl>
  );
};

JeInputTextError.propTypes = {
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  inputLabel: PropTypes.string,
  autoComplete: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  error: PropTypes.bool,
};

JeInputTextError.defaultProps = {
  required: false,
  fullWidth: false,
  variant: "outlined",
  name: "",
  size: "small",
  type: "text",
  inputLabel: "",
  autoComplete: null,
  multiline: false,
  rows: null,
  error: false,
};

export default React.memo(JeInputTextError);
