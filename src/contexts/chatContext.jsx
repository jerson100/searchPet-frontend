import useAxios from "axios-hooks";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import { AUTH_TOKEN } from "../configs/localstorage";

const ChatContext = createContext();

const ChatProvider = ({ children, roomTarget }) => {
  const [chats, setchats] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [loadingChats, setLoadingChats] = useState(false);
  const [errorChats, setErrorChats] = useState("");
  const [{}, getChats] = useAxios(
    {
      url: "/chats",
    },
    {
      manual: true,
      useCache: false,
    }
  );

  const selectChat = useCallback((selectedChat) => {
    setCurrentChat(selectedChat);
  }, []);

  const addNewPrivateChat = useCallback(async () => {}, [currentChat]);

  useEffect(() => {
    const getApi = async () => {
      setLoadingChats(true);
      try {
        const data = await getChats({
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
          },
        });
        setchats(data.data);
        setLoadingChats(false);
      } catch (e) {
        setLoadingChats(false);
        setErrorChats(e.message || "Ocurrió un error");
      }
    };
    getApi();
  }, []);

  const addLastMessageToChat = useCallback(({ chat, newlastMessage }) => {
    setchats((prev) => {
      const indexChat = prev.findIndex((c) => {
        console.log(c, chat);
        return c._id === chat;
      });
      const deletedChat = prev[indexChat];
      deletedChat.lastMessage = newlastMessage;
      return [...prev.splice(indexChat, 1), deletedChat];
    });
  }, []);

  useEffect(() => {
    if (!loadingChats && roomTarget && chats) {
      setCurrentChat(chats.find((chat) => chat._id === roomTarget));
    }
  }, [loadingChats, roomTarget, chats]);

  const values = useMemo(() => {
    return {
      chats,
      currentChat,
      selectChat,
      loadingChats,
      errorChats,
      addLastMessageToChat,
      addNewPrivateChat,
    };
  }, [
    chats,
    currentChat,
    selectChat,
    loadingChats,
    errorChats,
    addLastMessageToChat,
    addNewPrivateChat,
  ]);
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export { ChatContext, ChatProvider };
