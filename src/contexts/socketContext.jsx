import { useSnackbar } from "notistack";
import React, { createContext, useEffect, useMemo } from "react";
import socket from "../configs/socket";
import { NOTIFICATIONS } from "../consts/socket";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import CommentNotification from "../components/common/CommentNotification";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const userContext = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("auth user", userContext.user);
    if (userContext.user) {
      const sessionID = localStorage.getItem("sessionID");
      const auth = { userID: userContext.user.user._id };
      if (sessionID) auth.sessionID = sessionID;
      socket.auth = auth;
      socket.connect();
      socket.on("session", ({ sessionID, userID }) => {
        socket.auth = { sessionID, userID };
        socket.userID = userID;
        localStorage.setItem("sessionID", sessionID);
        // console.log("connected user");
      });
      socket.on("notification", ({ from, to, type, message, data }) => {
        // console.log(data);
        // console.log(NOTIFICATIONS.LOST_PET_COMMENT);
        if (type === NOTIFICATIONS.LOST_PET_COMMENT) {
          enqueueSnackbar(message, {
            // variant: "commentNotification",
            persist: true,
            content: (key, message) => (
              <CommentNotification
                id={key}
                message={message}
                comment={data}
                handleClickTo={() => {
                  navigate(`/pets/lost/${data.lostPet}`);
                }}
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
