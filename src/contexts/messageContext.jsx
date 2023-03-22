import useAxios from "axios-hooks";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AUTH_TOKEN } from "../configs/localstorage";
import useChatContext from "../hooks/useChatContext";
import io from "../configs/socket";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSnackbar } from "notistack";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [messages, setMessages] = useState(() => []);
  const [loadingNewMessage, setloadingNewMessage] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [errorNewMessage, setErrorNewMessage] = useState();
  const { addLastMessageToChat, currentChat } = useChatContext();
  const audioRef = useRef(new Audio("newMessage.mp3"));
  const [
    {
      loading: loadingGetMessages,
      error: errorGetMessages,
      data: dataMessages,
    },
  ] = useAxios(
    {
      url: `/chats/${currentChat?._id}/messages`,
      method: "GET",
      headers: {
        authorization: `Bearer ${AUTH_TOKEN.get()}`,
      },
    },
    { useCache: false }
  );

  const [, newMessageApi] = useAxios(
    {
      url: `/messages`,
      method: "POST",
    },
    { useCache: false, manual: true }
  );

  useEffect(() => {
    if (errorGetMessages) {
      if (errorGetMessages.status) {
        if (errorGetMessages.status === 401) {
          window.location.href = "/login";
        } else {
          enqueueSnackbar(errorGetMessages.message, { variant: "error" });
        }
      } else {
        enqueueSnackbar(
          "Ocurrió un error, intentelo más tarde o póngase en contacto con el administrador",
          {
            variant: "error",
          }
        );
      }
    }
  }, [errorGetMessages]);

  useEffect(() => {
    io.on("new-message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    });
    return () => {
      io.off("new-message");
    };
  }, []);

  useEffect(() => {
    if (loadingGetMessages) {
      setMessages([]);
    } else if (!errorGetMessages) {
      setMessages(dataMessages);
    } else {
      setMessages([]);
    }
  }, [loadingGetMessages, dataMessages]);

  const addNewMessage = useCallback(
    async ({ type = "text", text, image, cords }) => {
      setloadingNewMessage(true);
      try {
        const formData = new FormData();
        formData.append("text", text);
        image?.forEach((img) => {
          formData.append("images", img, img.path);
        });
        formData.append("type", type);
        formData.append("chat", currentChat._id);
        formData.append("sender", user.user._id);
        console.log(formData);
        const { data: newMessage } = await newMessageApi({
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
            "content-type": "multipart/form-data",
          },
          data: formData,
        });
        // console.log(newMessage);
        setMessages((prev) => [...prev, newMessage]);
        setloadingNewMessage(false);
        // addLastMessageToChat({
        //   chat: chat._id,
        //   newlastMessage: newMessage,
        // });
        io.emit("send-message", newMessage);
      } catch (e) {
        console.log(e);
        setloadingNewMessage(false);
        if (e.status) {
          if (e.status === 401) {
            window.location.href = "/login";
          } else {
            enqueueSnackbar(e.message, { variant: "error" });
          }
        } else {
          enqueueSnackbar(
            "Ocurrió un error, intentelo más tarde o póngase en contacto con el administrador",
            {
              variant: "error",
            }
          );
        }
      }
    },
    [/*addLastMessageToChat, */ user, currentChat]
  );

  const values = useMemo(() => {
    return {
      messages,
      addNewMessage,
      loadingNewMessage,
      errorNewMessage,
      loadingGetMessages,
    };
  }, [
    messages,
    addNewMessage,
    loadingNewMessage,
    errorNewMessage,
    loadingGetMessages,
    errorGetMessages,
  ]);
  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export { MessageProvider, MessageContext };
