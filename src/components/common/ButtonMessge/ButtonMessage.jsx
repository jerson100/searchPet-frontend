import React from "react";
import { Button } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

const ButtonMessage = ({ idUser, urlImageProfile, name, email }) => {
  const { user } = useAuthContext();
  return (
    <>
      {user?.user && user.user._id !== idUser && (
        <Button
          variant="outlined"
          size="small"
          LinkComponent={LinkRouter}
          to={`/chats`}
          state={{
            chat: {
              _id: "new",
              name,
              type: "private",
              urlImageProfile,
              lastMessage: null,
              email,
              admin: user.user._id,
              users: [user.user._id, idUser],
            },
          }}
        >
          Enviar mensaje
        </Button>
      )}
    </>
  );
};

export default ButtonMessage;
