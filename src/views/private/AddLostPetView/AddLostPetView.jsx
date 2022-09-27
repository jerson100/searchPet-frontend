import React from "react";
import { Helmet } from "react-helmet";
import JeSection from "../../../components/common/JeSection";
import LostPetRequestForm from "../../../components/common/lostPetRequestForm";

const AddLostPetView = () => {
  return (
    <>
      <Helmet>
        <title>Generar solicitud de perdida | Spet</title>
        <meta name="description" content="Agregar nueva mascota" />
      </Helmet>
      <JeSection
        component={"div"}
        title={"Generar solicitud de perdida"}
        // maxWidth={"md"}
      >
        <LostPetRequestForm />
      </JeSection>
    </>
  );
};

export default AddLostPetView;
