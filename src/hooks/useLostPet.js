import useAxios from "axios-hooks";

const useLostPet = (idLostPet) => {
  const [{ loading: loadingLostPet, data: lostPet, error }] = useAxios({
    url: `/lostpet/${idLostPet}`,
    method: "GET",
  });
  return { lostPet, loadingLostPet, error };
};

export default useLostPet;
