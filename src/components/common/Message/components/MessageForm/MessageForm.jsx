import { Button, IconButton, Skeleton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo, useState } from "react";
import { Send as SendIcon, Photo as PhotoIcon } from "@mui/icons-material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import DialogTitle from "@mui/material/DialogTitle";
import useChatContext from "../../../../../hooks/useChatContext";
import useMessageContext from "../../../../../hooks/useMessageContext";
import io from "../../../../../configs/socket";
import { useAuthContext } from "../../../../../hooks/useAuthContext";
import debounceFunction from "../../../../../utils/debouncefunction";
import { Form, Formik } from "formik";
import JeInputTextError from "../../../JeInputTextError/JeInputTextError";
import DropZoneImage from "../../../DropZoneImage/DropZoneImage";
import { LoadingButton } from "@mui/lab";
import { ValidateMessageImageCreationSchema } from "../../../../../api/message.validation";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { loadingGetMessages, addNewMessage, loadingNewMessage } =
    useMessageContext();
  const { user } = useAuthContext();
  const { loadingChats, currentChat } = useChatContext();

  const handleChange = ({ target: { value } }) => {
    setMessage(value);
    handleKeyUpDebounce();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMessage({ text: message });
    setMessage("");
  };

  const handleKeyUpDebounce = useMemo(() => {
    return debounceFunction(
      () => {
        io.emit("typing", {
          room: currentChat._id,
          user: {
            username: user.user.username,
            _id: user.user._id,
          },
        });
      },
      () => {
        io.emit("stop-typing", {
          room: currentChat._id,
          user: {
            username: user.user.username,
            _id: user.user._id,
          },
        });
      },
      800
    );
  }, [user, currentChat]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 1,
        p: 2,
      }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Box>
        {loadingChats | loadingGetMessages ? (
          <Skeleton variant="rectangular" height="40px" />
        ) : (
          <TextField
            type="text"
            variant="outlined"
            value={message}
            onChange={handleChange}
            fullWidth
            size="small"
            placeholder="Escribe algo..."
            // onKeyUp={handleKeyUpDebounce}
          />
        )}
      </Box>

      {loadingChats | loadingGetMessages ? (
        <>
          <Skeleton variant="circular" sx={{ width: "40px", height: "40px" }} />
          <Skeleton variant="circular" sx={{ width: "40px", height: "40px" }} />
        </>
      ) : (
        <>
          <ButtonPhoto
            addNewMessage={addNewMessage}
            loadingNewMessage={loadingNewMessage}
          />
          <IconButton type="submit" size="small">
            <SendIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

const ButtonPhoto = React.memo(({ addNewMessage, loadingNewMessage }) => {
  const [showModal, setshowModal] = useState(false);
  const handleShowModal = () => {
    setshowModal((prev) => !prev);
  };
  return (
    <>
      <IconButton size="small" onClick={handleShowModal}>
        <PhotoIcon />
      </IconButton>

      <Dialog open={showModal} onClose={handleShowModal}>
        <DialogTitle>Selecciona una imagen</DialogTitle>
        <Formik
          initialValues={{
            images: [],
            message: "",
          }}
          onSubmit={async ({ images, message }, { resetForm }) => {
            // console.log(images, message);
            await addNewMessage({
              type: "image",
              text: message,
              image: images,
            });
            resetForm();
            handleShowModal();
          }}
          validationSchema={ValidateMessageImageCreationSchema}
        >
          {({ touched, errors, values, setFieldValue }) => (
            <>
              <Form>
                <DialogContent>
                  <DialogContentText sx={{ mb: 2 }}>
                    Puede seleccionar entre png, svg, jpng menor a 10mb
                  </DialogContentText>
                  <DropZoneImage
                    files={values.images}
                    setFieldValue={setFieldValue}
                    title="Imágenes"
                    name="images"
                    multiple
                  />
                  <JeInputTextError
                    name="message"
                    inputLabel="Descripción"
                    fullWidth
                    error={touched.message && !!errors.message}
                    multiline
                    rows={4}
                  />
                </DialogContent>
                <DialogActions>
                  <Button color="error" onClick={handleShowModal}>
                    Cancelar
                  </Button>
                  <LoadingButton type="submit" loading={loadingNewMessage}>
                    Comentar
                  </LoadingButton>
                </DialogActions>
              </Form>
            </>
          )}
        </Formik>
      </Dialog>
    </>
  );
});

export default MessageForm;
