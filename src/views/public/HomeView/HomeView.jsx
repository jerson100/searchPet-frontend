import React from "react";
import { Helmet } from "react-helmet";
import Banner from "./components/Banner";
import Functionalitites from "./components/Functionalitites/Functionalitites";

const HomeView = () => {
  return (
    <>
      <Helmet>
        <title>Inicio | Spet</title>
        <meta
          name="description"
          content="Página principal de rescate de mascotas | Spet"
        />
      </Helmet>
      <Banner />
      <Functionalitites />
    </>
  );
};

export default HomeView;
