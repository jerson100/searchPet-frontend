import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { SelectFileStyle } from "./selectFile.style";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const SelectFile = ({ setfiles, multiple, accept }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setfiles(acceptedFiles);
    },
    [setfiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: multiple,
    accept: accept,
  });

  return (
    <SelectFileStyle {...getRootProps({ refKey: "innerRef" })}>
      <input {...getInputProps()} />
      <Typography variant="body2" component="p">
        Arrastre y suelte sus imágenes aquí, o de click en esta zona para
        seleccionar las imágenes
      </Typography>
    </SelectFileStyle>
  );
};

SelectFile.propTypes = {
  multiple: PropTypes.bool,
};

SelectFile.defaultProps = {
  multiple: false,
  accept: {},
};

export default SelectFile;
