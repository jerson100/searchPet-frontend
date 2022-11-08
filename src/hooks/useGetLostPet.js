import useAxios from "axios-hooks";
import { useCallback, useEffect, useState } from "react";

const useGetLostPet = (idUser, _page = 1, _length = 5) => {
  const [loading, setLoadingPets] = useState(true);
  const [lostPets, setLostPets] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [page, setPage] = useState(_page);
  const [length, setLength] = useState(_length);
  const [, execute] = useAxios({}, { useCache: false, manual: true });

  useEffect(() => {
    setLoadingPets(true);
    const api = async () => {
      try {
        const { data } = await execute({
          url: idUser ? `users/${idUser}/lostpets` : "lostpets",
          params: {
            page,
            length,
          },
        });
        if (data.length > 0) {
          setLostPets((prev) => [...prev, ...data]);
        }
        setIsNext(data.length > 0);
        setLoadingPets(false);
      } catch (e) {
        setLoadingPets(false);
      }
    };
    api();
    return () => {
      setLoadingPets(false);
    };
  }, [page, length, execute]);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);
  const previousPage = useCallback(() => {
    setPage((prev) => (prev - 1 <= 1 ? 1 : prev - 1));
  });

  return {
    loading,
    lostPets,
    length,
    page,
    nextPage,
    previousPage,
    isNext,
    setLength,
  };
};

export { useGetLostPet };
