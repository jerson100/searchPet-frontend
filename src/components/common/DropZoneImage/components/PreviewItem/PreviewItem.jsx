import React, { useEffect, useState } from "react";
import { PreviewItemStyle } from "./previewItem.style.js";

const PreviewItem = ({ file }) => {
  const [dataURL, setDataURL] = useState();
  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    const listener = (e) => {
      setDataURL(e.target.result);
    };
    fileReader.addEventListener("load", listener);
    return () => {
      fileReader.removeEventListener("load", listener);
    };
  }, [file]);
  return (
    <PreviewItemStyle>
      <img src={dataURL} alt={file.name} />
    </PreviewItemStyle>
  );
};

export default PreviewItem;
