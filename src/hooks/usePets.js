import { useCallback, useEffect, useState } from "react";
import useAxios from "axios-hooks";

const usePets = (path, typePet, _page = 1, _length = 2) => {
  const [loading, setLoadingPets] = useState(true);
  const [pets, setpets] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [page, setPage] = useState(_page);
  const [length, setLength] = useState(_length);

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
            url: `${path}/?page=${page}&length=${length}${
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

  const handleNext = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handlePrevious = useCallback(() => {
    setPage((prev) => prev - 1);
  }, []);

  return {
    loading,
    pets,
    isNext,
    handleNext,
    handlePrevious,
    setLength,
    setPage,
    page,
  };
};

export { usePets };
