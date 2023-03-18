import React, { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { LoadingButton } from "@mui/lab";
import useAxios from "axios-hooks";
import { AUTH_TOKEN } from "../../../configs/localstorage";
import { useNavigate } from "react-router-dom";

const ButtonMessage = ({ idUser, urlImageProfile, name, email }) => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [, getUsersChat] = useAxios(
    {
      url: "/chats",
      method: "GET",
    },
    { manual: true, useCache: false }
  );
  const [, createUserChat] = useAxios(
    {
      url: "/chats",
      method: "POST",
    },
    { manual: true, useCache: false }
  );
  const handleClick = async () => {
    try {
      //verificamos si existe ya un chat con ese usuario
      setLoading(true);
      let chat = null;
      const { data } = await getUsersChat({
        headers: {
          authorization: `Bearer ${AUTH_TOKEN.get()}`,
        },
        params: {
          users: [user.user._id, idUser],
          isCompleteUserArrays: true,
        },
      });
      chat = data?.length > 0 && data[0];
      //   console.log(data);
      if (data.length === 0) {
        const { data: newChat } = await createUserChat({
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
          },
          data: {
            users: [user.user._id, idUser],
            type: "private",
          },
        });
        // console.log(newChat);
        chat = newChat;
      }
      setLoading(false);
      navigate("/chats", {
        state: {
          roomTarget: chat._id,
        },
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <>
      {user?.user && user.user._id !== idUser && (
        <LoadingButton
          loading={loading}
          variant="outlined"
          size="small"
          onClick={handleClick}
          //   LinkComponent={LinkRouter}
          //   to={`/chats`}
          //   state={{
          //   chat: {
          //     _id: "new",
          //     name,
          //     type: "private",
          //     urlImageProfile,
          //     lastMessage: null,
          //     email,
          //     admin: user.user._id,
          //       users: [user.user._id, idUser],
          //     },
          //   }}
        >
          Enviar mensaje
        </LoadingButton>
      )}
    </>
  );
};

export default ButtonMessage;
