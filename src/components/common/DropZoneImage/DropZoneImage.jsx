import React from "react";
import { Box, Typography } from "@mui/material";
import SelectFile from "./components/SelectFile";
import Preview from "./components/Preview";
import PropTypes from "prop-types";

const DropZoneImage = ({
  title,
  files,
  setfiles,
  setFieldValue,
  multiple,
  accept,
  name,
}) => {
  return (
    <Box marginBottom={2}>
      <Typography variant="h6" component="p" mb={2} fontWeight="400">
        {title}
      </Typography>
      {/* <ErrorMessage
        name={name}
        render={(msg) => <FormHelperText>{msg}</FormHelperText>}
      /> */}
      <SelectFile
        setfiles={setfiles}
        setFieldValue={setFieldValue}
        multiple={multiple}
        accept={accept}
        name={name}
      />
      <Preview files={files} />
    </Box>
  );
};

DropZoneImage.propTypes = {
  multiple: PropTypes.bool,
};

DropZoneImage.defaultProps = {
  multiple: false,
  accept: { "image/jpeg": [], "image/png": [] },
};

export default DropZoneImage;
