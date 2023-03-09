import React from "react";
import { useMemo } from "react";
import MessageList from "./components/MessageList";

const messages = [
  {
    _id: 1,
    chat: 1,
    sender: {
      urlImageProfile: "https://avatars.githubusercontent.com/u/43390194?v=4",
      _id: "1",
      username: "jerson100",
      email: "juamkoo@gmail.com",
      name: "Jerson Omar",
    },
    text: "test",
    image: null,
    cords: null,
    status: 1,
    seen: false,
    isMyMessage: false,
  },
  {
    _id: 2,
    chat: 1,
    sender: {
      urlImageProfile: "https://avatars.githubusercontent.com/u/43390194?v=4",
      _id: "1",
      username: "jerson100",
      email: "juamkoo@gmail.com",
      name: "Jerson Omar",
    },
    text: "Hola...",
    image: null,
    cords: null,
    status: 1,
    seen: false,
    isMyMessage: false,
  },
  {
    _id: 3,
    chat: 1,
    sender: {
      urlImageProfile:
        "https://res.cloudinary.com/dgakkw9kj/image/upload/v1665057987/sPet/users/profiles/dwayne-the-rock-_iwjyo4.jpg",
      _id: "1",
      username: "lolito15",
      email: "lolito@gmail.com",
      name: "Lolito",
    },
    text: "Hol,.... wdw :D",
    image: null,
    cords: null,
    status: 1,
    seen: false,
    isMyMessage: true,
  },
  {
    _id: 4,
    chat: 1,
    sender: {
      urlImageProfile: "https://avatars.githubusercontent.com/u/43390194?v=4",
      _id: "1",
      username: "jerson100",
      email: "juamkoo@gmail.com",
      name: "Jerson Omar",
    },
    text: "Aea",
    image: null,
    cords: null,
    status: 1,
    seen: false,
    isMyMessage: false,
  },
  {
    _id: 5,
    chat: 1,
    sender: {
      urlImageProfile:
        "https://res.cloudinary.com/dgakkw9kj/image/upload/v1665057987/sPet/users/profiles/dwayne-the-rock-_iwjyo4.jpg",
      _id: "1",
      username: "lolito15",
      email: "lolito@gmail.com",
      name: "Lolito",
    },
    text: "tes",
    image: null,
    cords: null,
    status: 1,
    seen: false,
    isMyMessage: true,
  },
  {
    _id: 6,
    chat: 1,
    sender: {
      urlImageProfile:
        "https://res.cloudinary.com/dgakkw9kj/image/upload/v1665057987/sPet/users/profiles/dwayne-the-rock-_iwjyo4.jpg",
      _id: "1",
      username: "lolito15",
      email: "lolito@gmail.com",
      name: "Lolito",
    },
    text: "test15",
    image: null,
    cords: null,
    status: 1,
    seen: false,
    isMyMessage: true,
  },
];

const Message = ({ room }) => {
  const _messages = useMemo(() => {
    return messages.filter((m) => (m.chat === room) & (m.status === 1));
  }, [room]);
  return <MessageList messages={_messages} />;
};

export default Message;
