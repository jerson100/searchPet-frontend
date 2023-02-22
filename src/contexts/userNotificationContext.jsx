import { useCallback, useEffect, useReducer } from "react";
import { createContext } from "react";
import { AUTH_TOKEN } from "../configs/localstorage";
import { useAuthContext } from "../hooks/useAuthContext";
import {
  INTIAL_STATE_USER_NOTIFICATIONS,
  userNotificationReducer,
  USER_NOTIFICATION_ACTIONS,
} from "../reducers/userNotificationReducer";

const UserNotificationContext = createContext();

const UserNotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userNotificationReducer,
    INTIAL_STATE_USER_NOTIFICATIONS
  );

  const { user } = useAuthContext();

  useEffect(() => {
    console.log(user);
    const abortController = new AbortController();
    if (user) {
      const data = fetch("/notifications/count", {
        method: "GET",
        headers: {
          authorization: `Bearer ${AUTH_TOKEN.get()}`,
        },
        signal: abortController.signal,
      });
    }
    return () => {
      abortController.abort();
    };
  }, [user]);

  const addOneNotification = useCallback(() => {
    if (user) {
      dispatch({
        type: USER_NOTIFICATION_ACTIONS.ADD_ONE,
      });
    }
  }, [user]);

  return (
    <UserNotificationContext.Provider value={{ addOneNotification }}>
      {children}
    </UserNotificationContext.Provider>
  );
};

export { UserNotificationContext, UserNotificationProvider };
