import useAxios from "axios-hooks";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { AUTH_TOKEN } from "../configs/localstorage";
import socket from "../configs/socket";
// import { useCallback, useState } from "react";

const useNotification = (page = 1, length = 10000) => {
  const [notifications, setnotifications] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [, execute] = useAxios(
    {
      url: `/notifications`,
      method: "GET",
      headers: {
        authorization: `Bearer ${AUTH_TOKEN.get()}`,
      },
      params: {
        page,
        length,
      },
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    const getData = async () => {
      try {
        setloading(true);
        const data = await execute();
        setnotifications(data.data);
        setloading(false);
      } catch (e) {
        seterror(e.message);
        setloading(false);
        if (e.status) {
          if (e.status === 401) {
            window.location.href = "/login";
          } else {
          }
        }
      }
    };
    getData();
  }, [page, length]);

  useEffect(() => {
    socket.on(
      "new notification",
      ({ data: newComment, ...newNotification }) => {
        // console.log(newComment);
        setnotifications((prev) => [
          {
            ...newNotification,
            from: newComment.user,
          },
          ...prev,
        ]);
      }
    );
    return () => {
      socket.off("new notification");
    };
  }, [socket]);

  //   console.log(loading, error, notifications);

  const obj = useMemo(() => {
    return {
      loading,
      notifications,
      error,
    };
  }, [loading, notifications, error]);

  return obj;
};

export default useNotification;
