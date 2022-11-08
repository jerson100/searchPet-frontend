import React from "react";
import JeSection from "../../../../../components/common/JeSection";
import LostPetList from "../../../../../components/common/LostPetList/LostPetList";
import { useOutletContext } from "react-router-dom";
import { useGetLostPet } from "../../../../../hooks/useGetLostPet";

const UserLostPets = () => {
  const { idUser } = useOutletContext();
  const { loading, lostPets, isNext, nextPage } = useGetLostPet(idUser);
  return (
    <>
      <JeSection.Title textAlign="left" variant="h5">
        Mascotas Perdidas
      </JeSection.Title>
      <LostPetList
        items={lostPets}
        loading={loading}
        isNext={isNext}
        handleNextPage={nextPage}
      />
    </>
  );
};

export default UserLostPets;
