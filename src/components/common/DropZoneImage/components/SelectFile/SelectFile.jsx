import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { SelectFileStyle } from "./selectFile.style";

const SelectFile = ({ setfiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles[0]);
      setfiles(acceptedFiles);
    },
    [setfiles]
  );

  const { getRootProps, getInputProps, inputRef } = useDropzone({ onDrop });

  return (
    <SelectFileStyle {...getRootProps({ refKey: "innerRef" })}>
      <input {...getInputProps()} />
      <p>
        Arrastre y suelte sus imágenes aquí, o de click en esta zona para
        seleccionar las imágenes
      </p>
    </SelectFileStyle>
  );
};

export default SelectFile;
