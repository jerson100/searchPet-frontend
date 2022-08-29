import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { SelectFileStyle } from "./selectFile.style";
import { Typography } from "@mui/material";

const SelectFile = ({ setfiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setfiles(acceptedFiles);
    },
    [setfiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "multiple",
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

export default SelectFile;
