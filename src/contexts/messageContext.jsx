import useAxios from "axios-hooks";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
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
  const { addLastMessageToChat, addNewPrivateChat, currentChat } =
    useChatContext();
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
      header: {
        authorization: `Bearer ${AUTH_TOKEN.get()}`,
      },
    },
    { manual: currentChat._id !== "new" }
  );
  const [, newMessageApi] = useAxios(
    {
      url: `/messages`,
      method: "POST",
    },
    { useCache: false, manual: true }
  );

  useEffect(() => {
    if (dataMessages) {
      setMessages(dataMessages);
    }
  }, [dataMessages]);

  const addNewMessage = useCallback(
    async ({ type = "text", text, image, cords }) => {
      setloadingNewMessage(true);
      try {
        const { chat, isNew: isNewChat } = await addNewPrivateChat();
        console.log(chat, isNewChat);
        const { data: newMessage } = await newMessageApi({
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
          },
          data: { chat: chat._id, sender: user.user._id, text: text, type },
        });
        console.log(newMessage);
        setMessages((prev) => [...prev, newMessage]);
        setloadingNewMessage(false);
        addLastMessageToChat({
          chat: chat._id,
          newlastMessage: newMessage,
        });
        io.emit("new-message", newMessage);
        if (isNewChat) {
          io.emit("new-chat", chat);
        }
      } catch (e) {
        console.log(e);
        setloadingNewMessage(false);
      }
    },
    [addLastMessageToChat, user]
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
