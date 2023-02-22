const USER_NOTIFICATION_ACTIONS = {
  //   SET_NOTIFICATIONS: "SET_NOTIFICATIONS [NOTIFICATIONS]",
  SET_COUNT_NOTIFICATIONS: "SET_COUNT_NOTIFICATIONS",
  ADD_ONE: "ADD_ONE [NOTIFICATIONS_USER]",
};

const INTIAL_STATE_USER_NOTIFICATIONS = {
  count_notifications: 0,
  //   notifications: [],
};

const userNotificationReducer = (state, action) => {
  switch (action.type) {
    case USER_NOTIFICATION_ACTIONS.SET_COUNT_NOTIFICATIONS:
      return {
        ...state,
        count_notifications: action.payload,
      };
    case USER_NOTIFICATION_ACTIONS.ADD_ONE:
      return {
        ...state,
        count_notifications: state.count_notifications + 1,
      };
    default:
      return state;
  }
};

export {
  USER_NOTIFICATION_ACTIONS,
  INTIAL_STATE_USER_NOTIFICATIONS,
  userNotificationReducer,
};
