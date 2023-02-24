import { useSnackbar } from "notistack";
import React, { createContext, useEffect, useMemo } from "react";
import socket from "../configs/socket";
import { NOTIFICATIONS } from "../consts/socket";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import CommentNotification from "../components/common/CommentNotification";
import { SESSION_ID_STORAGE } from "../configs/localstorage";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const userContext = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("auth user", userContext.user);
    if (userContext.user) {
      const sessionID = SESSION_ID_STORAGE.get();
      const auth = { userID: userContext.user.user._id };
      if (sessionID) auth.sessionID = sessionID;
      socket.auth = auth;
      socket.connect();
      socket.on("session", ({ sessionID, userID }) => {
        socket.auth = { sessionID, userID };
        socket.userID = userID;
        SESSION_ID_STORAGE.add(sessionID);
      });
      socket.on("notification", ({ from, to, type, content, data, path }) => {
        if (type === NOTIFICATIONS.LOST_PET_COMMENT) {
          enqueueSnackbar(content, {
            persist: true,
            content: (key, message) => (
              <CommentNotification
                id={key}
                message={message}
                comment={data}
                handleClickTo={() => navigate(path)}
              />
            ),
          });
        }
      });
    }
    return () => {
      socket.off("session");
      socket.off("notification");
    };
  }, [userContext.user]);

  const values = useMemo(() => {
    return {};
  }, []);

  return (
    <SocketContext.Provider value={values}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
