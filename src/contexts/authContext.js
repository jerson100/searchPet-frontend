import useAxios from "axios-hooks";
import { useSnackbar } from "notistack";
import { createContext, useCallback, useState } from "react";
import { AUTH_TOKEN } from "../configs/localstorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [isLogued, setisLogued] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [{ loadingLogin }, execute] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );

  const login = useCallback(async (email, password) => {
    try {
      const data = await execute({
        url: "/auth/login",
        data: { email, password },
      });
      console.log(data);
      setuser(data);
      setisLogued(true);
      AUTH_TOKEN.add(data.accessToken);
    } catch (e) {
      if (e.status) {
        enqueueSnackbar(e.message, { variant: "error" });
      }
    }
  }, []);

  const logout = useCallback(() => {
    setisLogued(false);
    setuser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ loadingLogin, user: user, isLogued: isLogued, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
