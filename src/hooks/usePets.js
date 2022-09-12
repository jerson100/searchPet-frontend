import useAxios from "axios-hooks";
import { useEffect, useState } from "react";

const usePets = (typePet, page, length = 2) => {
  const [loading, setLoadingPets] = useState(true);
  const [pets, setpets] = useState([]);
  const [isNext, setIsNext] = useState(false);

  const [, getPets] = useAxios(
    {
      method: "GET",
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    setLoadingPets(true);
    const controller = new AbortController();
    const api = async () => {
      try {
        const data = await getPets(
          {
            url: `/pets/?page=${page}&length=${length}${
              typePet ? `&typepet=${typePet}` : ""
            }`,
            signal: controller.signal,
          },
          { useCache: true }
        );
        setIsNext(data.data.length > 0);
        if (page === 1) {
          setpets(data.data);
        } else {
          if (data.data.length > 0) {
            setpets((previousPet) => [...previousPet, ...data.data]);
          }
        }
        setLoadingPets(false);
      } catch (e) {
        if (e.code !== "ERR_CANCELED") {
          setLoadingPets(false);
        }
      }
    };
    api();
    return () => {
      controller.abort();
      setLoadingPets(false);
    };
  }, [typePet, getPets, page, length]);

  return {
    loading,
    pets,
    isNext,
  };
};

export { usePets };
