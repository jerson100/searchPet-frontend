const JE_GROUP_SELECTION_ACTIONS = {
  ADD_SELECTED_ITEM: "[JE_GROUP_SELECTION] ADD_SELECTED_ITEM",
  DELETE_SELECTED_ITEM: "[JE_GROUP_SELECTION] DELETE_SELECTED_ITEM",
  SET_SELECTED_ITEM: "[JE_GROUP_SELECTION] SET_SELECTED_ITEM",
};

const JE_GROUP_SELECTION_INITIAL_STATE = {
  selectedItems: [],
};

const jeGroupSelectionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case JE_GROUP_SELECTION_ACTIONS.ADD_SELECTED_ITEM:
      let aux = payload;
      if (!Array.isArray(aux)) {
        aux = [payload];
      }
      return { selectedItems: [...state.selectedItems, ...aux] };
    case JE_GROUP_SELECTION_ACTIONS.DELETE_SELECTED_ITEM:
      const items = state.selectedItems.filter(({ value }) => {
        return value !== payload.value;
      });
      return { selectedItems: items };
    case JE_GROUP_SELECTION_ACTIONS.SET_SELECTED_ITEM:
      return { selectedItems: [payload] };
    default:
      return state;
  }
};

export {
  JE_GROUP_SELECTION_INITIAL_STATE,
  JE_GROUP_SELECTION_ACTIONS,
  jeGroupSelectionReducer,
};
