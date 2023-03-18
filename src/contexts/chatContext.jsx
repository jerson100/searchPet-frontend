import useAxios from "axios-hooks";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import { AUTH_TOKEN } from "../configs/localstorage";

const ChatContext = createContext();

//examples--->
// const _chats = [
//   {
//     _id: 1,
//     name: "Jerson Ramírez Ortiz",
//     type: "private",
//     urlImageProfile: "https://avatars.githubusercontent.com/u/43390194?v=4",
//     email: "juamkoo@gmail.com",
//     lastMessage: {
//       text: "Mensaje de ejemplo",
//       createdAt: "Hace 5hrs",
//     },
//   },
//   {
//     _id: 2,
//     name: "Manuel Quispe",
//     type: "private",
//     email: "manuel15@gmail.com",
//     urlImageProfile:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
//     lastMessage: {
//       text: "Mensaje de ejemplo2",
//       createdAt: "Hace 3hrs",
//     },
//   },
//   {
//     _id: 3,
//     name: "Roberto saenz",
//     type: "private",
//     email: "robertosa@gmail.com",
//     urlImageProfile:
//       "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
//     lastMessage: {
//       text: "Mensaje de ejemplo451",
//       createdAt: "Hace 6hrs",
//     },
//   },
//   {
//     _id: 4,
//     name: "Juan Carlos",
//     type: "private",
//     email: "jucarl153@gmail.com",
//     urlImageProfile:
//       "https://media.istockphoto.com/id/1355480439/photo/smiling-man-having-video-call-from-home.jpg?s=612x612&w=0&k=20&c=k4AtJeY_sE7ZBR5ThpuYjIMJGE9hQoLapDnCAkFp0EE=",
//     lastMessage: {
//       text: "Mensaje de ejemplo4",
//       createdAt: "Hace 10hrs",
//     },
//   },
//   {
//     _id: 5,
//     name: "Jesús Natalán",
//     type: "private",
//     email: "jesuTal3@gmail.com",
//     urlImageProfile:
//       "https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg",
//     lastMessage: {
//       text: "Mensaje de ejemplo",
//       createdAt: "Hace 11hrs",
//     },
//   },
//   {
//     _id: 6,
//     name: "Laura Mantilla",
//     type: "private",
//     email: "Laui3@gmail.com",
//     urlImageProfile:
//       "https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?b=1&k=20&m=1154642632&s=612x612&w=0&h=StstyxyDdiJQgUSTlaWv2ITXSMb029KzXijHtsaTQEg=",
//     lastMessage: {
//       text: "Mensaje de ejemplo6 wqed w fdwe f we fw ef we fewef fw ef we fw ef we few ",
//       createdAt: "Hace 15hrs",
//     },
//   },
//   {
//     _id: 7,
//     name: "Juana Lary",
//     type: "private",
//     email: "Lazy78@gmail.com",
//     urlImageProfile:
//       "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
//     lastMessage: {
//       text: "Mensaje de ejemplo6 wqed w fdwe f we fw ef we fewef fw ef we fw ef we few ",
//       createdAt: "Hace 16hrs",
//     },
//   },
//   {
//     _id: 8,
//     name: "Ana Lopito",
//     type: "private",
//     email: "anaLop1@gmail.com",
//     urlImageProfile:
//       "https://cdn-sites-images.46graus.com/files/photos/c22c5bf1/611a6c66-c49a-4a9d-9df4-e480257c1509/dscf8101-1920x1280.jpg",
//     lastMessage: {
//       text: "Mensaje de ejemplo6 wqed w fdwe f we fw ef we fewef fw ef we fw ef we few ",
//       createdAt: "Hace 3días",
//     },
//   },
//   {
//     _id: 9,
//     name: "Los Intocables",
//     type: "group",
//     email: "LosItol@gmail.com",
//     urlImageProfile:
//       "https://media.gettyimages.com/id/1187719689/photo/intocable-winner-of-best-norte%C3%B1o-album-poses-in-the-press-room-during-the-20th-annual-latin.jpg?s=612x612&w=gi&k=20&c=o7Zj7MxCGoQzcSiwCHBevfWsUs8yCbjnLuYHqRfA9qA=",
//     lastMessage: {
//       text: "Envió una foto",
//       createdAt: "Hace 3días",
//     },
//   },
//   {
//     _id: 10,
//     name: "Maritza liops",
//     type: "private",
//     urlImageProfile:
//       "https://media.gettyimages.com/id/634313310/photo/mark-chesnutt-and-daryle-singletary-perform-during-1-night-1-place-1-time-a-heroes-friends.jpg?s=612x612&w=gi&k=20&c=VtlXG7fDFsYGQ77IfD7w-ooAIXlP5CzEdUwTzANd8Ps=",
//     lastMessage: {
//       text: "Mensaje de ejemplo6 wqed w fdwe f we fw ef we fewef fw ef we fw ef we few ",
//       createdAt: "Hace 1mes",
//     },
//   },
// ];

const ChatProvider = ({ children, newChat }) => {
  const [chats, setchats] = useState([]);
  const [currentChat, setCurrentChat] = useState(() => newChat);
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

  const addNewPrivateChat = useCallback(async () => {
    if (currentChat._id === "new") {
      const data = await fetch("http://localhost:4210/api/v1/chats", {
        headers: {
          authorization: `Bearer ${AUTH_TOKEN.get()}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          users: newChat.users,
          // admin: newChat.admin,
          // urmImageProfile: newChat.urlImageProfile,
          type: newChat.type,
          name: newChat.name,
        }),
      });
      const datajs = await data.json();
      setCurrentChat(datajs);
      return { isNew: true, chat: datajs };
    }
    return { isNew: false, chat: currentChat };
  }, [currentChat]);

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
    if (!loadingChats && newChat) {
      setCurrentChat(newChat);
    }
  }, [loadingChats, newChat]);

  const values = useMemo(() => {
    let ch = newChat ? [newChat, ...chats] : chats;
    return {
      chats: ch,
      currentChat: currentChat,
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
    newChat,
    loadingChats,
    errorChats,
    addLastMessageToChat,
    addNewPrivateChat,
  ]);
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export { ChatContext, ChatProvider };
