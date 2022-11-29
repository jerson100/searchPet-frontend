const LostPetsActions = {
  SET_DATA: "SET_DATA [LOST_PETS]",
  NEXT_PAGE: "NEXT_PAGE [LOST_PETS]",
  PREVIOUS_PAGE: "PREVIOUS_PAGE [LOST_PETS]",
  SET_MAX_DISTANCE: "SET_MAX_DISTANCE [LOST_PETS",
  SET_LOADING: "SET_LOADING [LOST_PETS",
  SET_BY_USER_LOCATION: "SET_BY_USER_LOCATION [LOST_PETS]",
  SET_LENGTH: "SET_LENGTH [LOST_PETS]",
};

const INITIAL_STATE_LOST_PETS = {
  lostPets: [],
  page: 1,
  loading: true,
  length: 5,
  maxDistance: null,
  clientLocation: null,
  isNext: false,
};

const lostPetsReducer = (state, action) => {
  switch (action.type) {
    case LostPetsActions.SET_DATA:
      return {
        ...state,
        lostPets: [...state.lostPets, ...action.payload],
        isNext: action.payload.length > 0,
        loading: false,
      };
    case LostPetsActions.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case LostPetsActions.PREVIOUS_PAGE:
      return { ...state, page: state.page - 1 < 0 ? 0 : state.page - 1 };
    case LostPetsActions.SET_LOADING:
      return { ...state, loading: action.payload };
    case LostPetsActions.SET_MAX_DISTANCE:
      return { ...state, loading: action.payload };
    case LostPetsActions.SET_BY_USER_LOCATION:
      const { location, distance } = action.payload;
      let { page, lostPets } = state;
      if (
        (location?.lat !== state.clientLocation?.lat &&
          location?.lng === state.clientLocation?.lng) ||
        distance !== state.maxDistance
      ) {
        page = 1;
        lostPets = [];
      }
      return {
        ...state,
        clientLocation: !location || !distance ? null : location,
        maxDistance: distance,
        page,
        lostPets,
      };
    case LostPetsActions.SET_LENGTH:
      return { ...state, length: action.payload };
    default:
      return state;
  }
};

export { lostPetsReducer, INITIAL_STATE_LOST_PETS, LostPetsActions };
