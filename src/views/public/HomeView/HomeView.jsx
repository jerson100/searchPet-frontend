import React from "react";
import Banner from "./components/Banner";
import JeSection from "../../../components/common/JeSection/JeSection";
import Typography from "@mui/material/Typography";

const HomeView = () => {
  return (
    <>
      <Banner />
      <JeSection title="Funcionalidades">
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint
          ullam, labore perferendis facilis tempora esse nesciunt odit delectus
          iusto vitae illum quis animi consequatur explicabo, aperiam ipsam,
          possimus eos.
        </Typography>
      </JeSection>
    </>
  );
};

export default HomeView;
