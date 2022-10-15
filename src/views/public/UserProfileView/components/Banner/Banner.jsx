import React from "react";
import { Box, Skeleton } from "@mui/material";

const Banner = ({ loadingGetUser }) => {
  return (
    <Box
      sx={{
        height: {
          xs: "200px",
          md: "400px",
          position: "relative",
          filter: "brightness(0.6)",
        },
      }}
    >
      {loadingGetUser ? (
        <>
          <Skeleton
            height="100%"
            width="100%"
            variant="rectangular"
            sx={{ position: "absolute", top: 0, left: 0 }}
          />
        </>
      ) : (
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
          }}
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F07%2F20%2Fboy-adopted-dog-618635408-2000.jpg"
          alt="my background"
        />
      )}
    </Box>
  );
};

export default Banner;
