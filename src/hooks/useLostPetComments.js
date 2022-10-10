import { useEffect, useState, useCallback } from "react";
import useAxios from "axios-hooks";
import axios from "../configs/axios";
import { AUTH_TOKEN } from "../configs/localstorage";
import { useSnackbar } from "notistack";
import { useAuthContext } from "./useAuthContext";

const useLostPetComments = (idLostPet) => {
  const [comments, setComments] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuthContext();
  const [deleteComemntAbortControllers, setDeleteComemntAbortController] =
    useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [, getComments] = useAxios(
    {
      url: `lostpet/${idLostPet}/comments`,
      method: "GET",
    },
    { useCache: false, manual: true }
  );

  useEffect(() => {
    const get = async () => {
      if (idLostPet) {
        try {
          setLoadingComments(true);
          const { data } = await getComments();
          setComments(data);
          setLoadingComments(false);
        } catch (e) {
          if (e.status) {
            if (e.status === 401) {
              window.location.href = "/login";
            } else {
              enqueueSnackbar(e.message, { variant: "error" });
            }
            setLoadingComments(false);
          } else if (e.status !== 0) {
            enqueueSnackbar(
              "Ocurrió un error, puede volver a intentarlo más tarde",
              {
                variant: "error",
              }
            );
            setLoadingComments(false);
          }
        }
      }
    };
    get();
  }, [idLostPet, getComments, enqueueSnackbar]);

  useEffect(() => {
    return () => {
      deleteComemntAbortControllers.forEach((abortC) => {
        abortC.abort();
      });
    };
  }, [deleteComemntAbortControllers]);

  const [{ loading: loadingCreateComment }, createComment] = useAxios(
    { url: `lostpetcomments`, method: "POST" },
    { manual: true }
  );

  const addComment = useCallback(
    async (description) => {
      try {
        const { data: newComment } = await createComment({
          data: { lostPet: idLostPet, description },
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
          },
        });
        setComments((prev) => [
          { ...newComment, user: user.user, animateAddNewComment: true },
          ...prev,
        ]);
        enqueueSnackbar("Comentario creado", {
          variant: "success",
        });
      } catch (e) {
        if (e.status) {
          if (e.status === 401) {
            window.location.href = "/login";
          } else {
            enqueueSnackbar(e.message, { variant: "error" });
          }
        } else if (e.status !== 0) {
          enqueueSnackbar(
            "Ocurrió un error, puede volver a intentarlo más tarde",
            {
              variant: "error",
            }
          );
        }
      }
    },
    [idLostPet, enqueueSnackbar, createComment, user?.user]
  );

  const deleteComment = useCallback(
    async (id) => {
      try {
        const abortC = new AbortController();
        setDeleteComemntAbortController((prev) => [...prev, abortC]);
        await axios.delete(`lostpetcomments/${id}`, {
          signal: abortC.signal,
          headers: {
            authorization: `Bearer ${AUTH_TOKEN.get()}`,
          },
        });
        setComments((prev) => prev.filter(({ _id }) => _id !== id));
        return true;
      } catch (e) {
        if (e.status) {
          if (e.status === 401) {
            window.location.href = "/login";
          } else {
            enqueueSnackbar(e.message, {
              variant: "error",
            });
          }
        } else if (e.status !== 0) {
          enqueueSnackbar(
            "Ocurrió un error, puede volver a intentarlo más tarde",
            {
              variant: "error",
            }
          );
        }
      }
    },
    [enqueueSnackbar, setComments]
  );

  return {
    comments,
    addComment,
    deleteComment,
    loadingComments,
    loadingCreateComment,
  };
};

export default useLostPetComments;
