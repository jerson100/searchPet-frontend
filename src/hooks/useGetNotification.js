import useAxios from "axios-hooks";
import { useMemo } from "react";
import { useEffect } from "react";
import { AUTH_TOKEN } from "../configs/localstorage";
// import { useCallback, useState } from "react";

const useNotification = (page = 1, length = 10000) => {
  const [{ loading, data, response, error }, execute] = useAxios(
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
        await execute();
      } catch (e) {
        if (e.status) {
          if (e.status === 401) {
            window.location.href = "/login";
          }
        }
      }
    };
    getData();
  }, [page, length]);

  const obj = useMemo(() => {
    return {
      loading,
      notifications: data,
      response,
      error,
    };
  }, [loading, data, response, error]);

  return obj;
};

export default useNotification;
