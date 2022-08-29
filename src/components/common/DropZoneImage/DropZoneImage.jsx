import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SelectFile from "./components/SelectFile";
import Preview from "./components/Preview";

const DropZoneImage = ({ title }) => {
  const [files, setfiles] = useState([]);
  return (
    <Box>
      <Typography variant="h6" component="p" mb={2} fontWeight="400">
        {title}
      </Typography>
      <SelectFile setfiles={setfiles} />
      <Preview files={files} />
    </Box>
  );
};

export default DropZoneImage;
