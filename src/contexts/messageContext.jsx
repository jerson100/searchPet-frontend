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

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [messages, setMessages] = useState(() => []);
  const [loadingNewMessage, setloadingNewMessage] = useState(false);
  const [errorNewMessage, setErrorNewMessage] = useState();
  const { addLastMessageToChat, currentChat } = useChatContext();
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
    io.on("new-message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
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
        const { data: newMessage } = await newMessageApi({
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
          },
          data: {
            chat: currentChat._id,
            sender: user.user._id,
            text: text,
            type,
          },
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
