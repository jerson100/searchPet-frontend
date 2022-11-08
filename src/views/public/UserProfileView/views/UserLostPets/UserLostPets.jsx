import React from "react";
import JeSection from "../../../../../components/common/JeSection";
import useAxios from "axios-hooks";
import LostPetList from "../../../../../components/common/LostPetList/LostPetList";
import { useOutletContext } from "react-router-dom";

const UserLostPets = () => {
  const { idUser } = useOutletContext();
  const [{ loading, data, error }] = useAxios({
    url: `users/${idUser}/lostpets`,
  });
  return (
    <>
      <JeSection.Title textAlign="left" variant="h5">
        Mascotas Perdidas
      </JeSection.Title>
      <LostPetList items={data} loading={loading} />
    </>
  );
};

export default UserLostPets;
