import React from "react";
import {
  Avatar,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Chip,
  Box,
  FormHelperText,
} from "@mui/material";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const LostPetsSelect = ({
  required,
  fullWidth,
  variant,
  name,
  size,
  inputLabel,
  selectItems,
  multiple = true,
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
        multiple={multiple}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selectItem(selectItems, selected)}
          </Box>
        )}
        MenuProps={MenuProps}
        sx={{
          backgroundColor: (theme) => {
            return theme.palette.background.paper;
          },
        }}
      >
        {selectItems.map(({ value, name, urlImageProfile }) => (
          <MenuItem key={name} value={name}>
            <LostPetItem name={value} urlImageProfile={urlImageProfile} />
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

const selectItem = (items, selectedItems) => {
  return (
    <>
      {selectedItems?.map((i) => {
        const { name, value, urlImageProfile } = items?.find(
          (o) => o.name === i
        );
        return (
          <Chip
            key={name}
            label={value}
            avatar={<Avatar title={name} src={urlImageProfile} />}
          />
        );
      })}
    </>
  );
};

LostPetsSelect.propTypes = {
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

LostPetsSelect.defaultProps = {
  required: false,
  fullWidth: false,
  variant: "outlined",
  name: "",
  size: "small",
  inputLabel: "",
  error: false,
};

const LostPetItem = React.memo(({ name, urlImageProfile }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Avatar src={urlImageProfile} title={name} />
      </Grid>
      <Grid item flexGrow={1}>
        {name}
      </Grid>
    </Grid>
  );
});

export default LostPetsSelect;
