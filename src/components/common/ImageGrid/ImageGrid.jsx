import React, { useState, useCallback, useMemo } from "react";
import { Box } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const ImageGrid = ({ images }) => {
  const [index, setIndex] = useState(-1);

  const handleClick = useCallback((index, item) => setIndex(index), []);

  const mapedImages = useMemo(() => {
    return images?.map((img) => ({
      //   original: img,
      //   src: img,
      src: img,
      //   caption: "After Rain (Jeshu John - designerspics.com)",
    }));
  }, [images]);

  if (!images?.length) return null;

  return (
    <>
      <Box
        display={"flex"}
        flexWrap="wrap"
        sx={{
          height: "100%",
          alignItems: "stretch",
          overflow: "hidden",
        }}
      >
        {images?.map((i, index) => (
          <Box
            component="img"
            key={i}
            src={i}
            sx={{
              flexBasis: "50%",
              flexGrow: "1",
              flexShrink: "1",
              width: "50%",
              minHeight: `calc(100% / 2)`,
              maxHeight: `${getMaxHeight(images)}`,
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => handleClick(index)}
          />
        ))}
      </Box>
      <Lightbox
        slides={mapedImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 1,
          scrollToZoom: true,
          zoomInMultiplier: 2,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          keyboardMoveDistance: 50,
          doubleClickMaxStops: 2,
          doubleClickDelay: 300,
          doubleTapDelay: 300,
        }}
        animation={{ zoom: 500 }}
      />
    </>
  );
};

const getMaxHeight = (items) => {
  if (items.length > 2) {
    return "calc(100% / 2)";
  }
  return "100%";
};

export default ImageGrid;
