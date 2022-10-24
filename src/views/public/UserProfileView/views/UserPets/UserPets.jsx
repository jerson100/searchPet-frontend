import React from "react";
import { useParams } from "react-router-dom";
import JeSection from "../../../../../components/common/JeSection";
import PetList from "../../../../../components/common/PetList";
import { usePets } from "../../../../../hooks/usePets";

const UserPets = () => {
  const params = useParams();
  const {
    isNext,
    loading: loadingGetPets,
    pets,
    handleNext,
    page,
  } = usePets(`/users/${params.idUser}/pets`, null, 1, 5);
  return (
    <>
      <JeSection.Title textAlign="left" variant="h5">
        Mascotas
      </JeSection.Title>
      {page == 1 && loadingGetPets ? (
        <PetList.Loading />
      ) : (
        <PetList
          component="div"
          bordered={false}
          pets={pets}
          loading={loadingGetPets}
          page={page}
          isNext={isNext}
          handleNext={handleNext}
        />
      )}
    </>
  );
};

export default UserPets;
