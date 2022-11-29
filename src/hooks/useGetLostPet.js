import useAxios from "axios-hooks";
import { useCallback, useEffect, useReducer } from "react";
import {
  INITIAL_STATE_LOST_PETS,
  LostPetsActions,
  lostPetsReducer,
} from "../reducers/lostPetsReducer";

const useGetLostPet = (idUser, _page = 1, _length = 5) => {
  const [
    { lostPets, page, loading, length, maxDistance, clientLocation, isNext },
    dispatch,
  ] = useReducer(lostPetsReducer, INITIAL_STATE_LOST_PETS, (data) => {
    return { ...data, page: _page, length: _length };
  });

  const [, execute] = useAxios({}, { useCache: false, manual: true });

  useEffect(() => {
    dispatch({
      type: LostPetsActions.SET_LOADING,
      payload: true,
    });
    const api = async () => {
      const query = { page, length };
      if (maxDistance) query.maxDistance = maxDistance;
      if (clientLocation)
        query.currentLocation = `${clientLocation.lat}, ${clientLocation.lng}`;
      try {
        const { data } = await execute({
          url: idUser ? `users/${idUser}/lostpets` : "lostpets",
          params: query,
        });
        dispatch({
          type: LostPetsActions.SET_DATA,
          payload: data,
        });
      } catch (e) {}
      dispatch({
        type: LostPetsActions.SET_LOADING,
        payload: false,
      });
    };
    api();
    return () => {
      dispatch({
        type: LostPetsActions.SET_LOADING,
        payload: false,
      });
    };
  }, [page, length, execute, clientLocation, maxDistance]);

  const getLostPetsByUserLocation = useCallback((distance, location) => {
    dispatch({
      type: LostPetsActions.SET_BY_USER_LOCATION,
      payload: { location: location, distance: distance },
    });
  }, []);

  const nextPage = useCallback(() => {
    dispatch({ type: LostPetsActions.NEXT_PAGE });
  }, []);
  const previousPage = useCallback(() => {
    dispatch({ type: LostPetsActions.PREVIOUS_PAGE });
  }, []);

  const setLength = useCallback((length) => {
    dispatch({ type: LostPetsActions.SET_LENGTH, payload: length });
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
    getLostPetsByUserLocation,
  };
};

export { useGetLostPet };
