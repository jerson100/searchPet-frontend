import { Typography } from "@mui/material";
import React from "react";
import PreviewItem from "../PreviewItem/PreviewItem.jsx";
import { PreviewStyle, PreviewContentStyle } from "./preview.style.js";

const Preview = ({ files }) => {
  return (
    <PreviewStyle>
      <Typography variant="subtitle2" component="p" mb={2} fontWeight="400">
        Vista previa
      </Typography>
      <PreviewContentStyle>
        {files?.map((file, i) => (
          <PreviewItem key={file.name} file={file} />
        ))}
      </PreviewContentStyle>
    </PreviewStyle>
  );
};

export default Preview;
