import useAxios from "axios-hooks";
import { useSnackbar } from "notistack";
import { createContext, useCallback, useEffect, useState } from "react";
import { AUTH_TOKEN } from "../configs/localstorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [isLogued, setisLogued] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [{ loading: loadingLogin }, execute] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );
  const [previousLoading, setpreviousLoading] = useState(true);
  const [, executePreviousLoading] = useAxios(
    {
      method: "GET",
    },
    { manual: true }
  );

  useEffect(() => {
    const getToken = async () => {
      const token = AUTH_TOKEN.get();
      if (token) {
        try {
          const data = await executePreviousLoading({
            url: "/auth/token",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setuser({
            ...data,
            accessToken: token,
          });
          setisLogued(true);
          AUTH_TOKEN.add(token);
        } catch (e) {}
      }
      setpreviousLoading(false);
    };
    getToken();
  }, [executePreviousLoading]);

  const login = useCallback(
    async (email, password) => {
      try {
        const data = await execute({
          url: "/auth/login",
          data: { email, password },
        });
        setuser(data);
        setisLogued(true);
        AUTH_TOKEN.add(data.accessToken);
      } catch (e) {
        if (e.status) {
          enqueueSnackbar(e.message, { variant: "error" });
        }
      }
    },
    [execute, enqueueSnackbar]
  );

  const logout = useCallback(() => {
    AUTH_TOKEN.remove();
    setisLogued(false);
    setuser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loadingLogin,
        user: user,
        isLogued: isLogued,
        login,
        logout,
        previousLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
