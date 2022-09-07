import React from "react";
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
  value,
  handleChange,
  error,
  errorMessage,
  Icon,
  inputLabel,
  autoComplete,
  multiline,
  rows,
  handleBlur,
}) => {
  return (
    <FormControl
      required={required}
      fullWidth={fullWidth}
      variant={variant}
      margin="normal"
    >
      <OutlinedInput
        id={name}
        type={type}
        size={size}
        name={name}
        value={value}
        onChange={handleChange}
        error={error || !!errorMessage}
        autoComplete={autoComplete}
        multiline={multiline}
        rows={rows}
        onBlur={handleBlur}
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
      <FormHelperText>{errorMessage}</FormHelperText>
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
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  inputLabel: PropTypes.string,
  autoComplete: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  handleBlur: PropTypes.func,
};

JeInputTextError.defaultProps = {
  required: false,
  fullWidth: false,
  variant: "outlined",
  name: "",
  size: "small",
  type: "text",
  value: "",
  handleChange: () => {},
  error: false,
  errorMessage: "",
  inputLabel: "",
  autoComplete: null,
  multiline: false,
  rows: null,
  handleBlur: null,
};

export default React.memo(JeInputTextError);
