import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ConstructionSvg from "../../../assets/img/svg/construction.svg";

const PageUnderConstruction = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: "1",
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Box
        component="img"
        sx={{ width: { xs: 250, md: 500 }, height: "auto" }}
        src={ConstructionSvg}
      />
      <Typography textAlign={"center"} variant="h5" component="h1">
        Página en construcción
      </Typography>
    </Container>
  );
};

export default PageUnderConstruction;
