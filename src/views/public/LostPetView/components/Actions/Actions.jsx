import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dialog, Fab, Paper, Slide } from "@mui/material";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import LostPetLocation from "../LostPetLocation";
import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";
import LostPetComments from "../LostPetComments";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Actions = ({ position, image, idLostPet, idAuthorPost }) => {
  const [showMap, setShowMap] = useState(false);
  const [showCommets, setShowCommets] = useState(false);
  return ReactDOM.createPortal(
    <>
      <Fab
        sx={{
          position: "fixed",
          bottom: "0",
          transform: "translateY(calc(-1 * (100% + 2rem)))",
          right: "1rem",
          zIndex: 1,
        }}
        size="medium"
        aria-label={"map"}
        color={"primary"}
        onClick={() => setShowMap(true)}
      >
        <RoomTwoToneIcon />
      </Fab>
      <Fab
        sx={{
          position: "fixed",
          bottom: "0",
          transform: "translateY(-1rem)",
          right: "1rem",
          zIndex: 1,
        }}
        size="medium"
        aria-label={"map"}
        color={"primary"}
        onClick={() => setShowCommets(true)}
      >
        <MessageTwoToneIcon />
      </Fab>
      <Dialog
        disableEscapeKeyDown={true}
        fullScreen
        open={showMap}
        onClose={() => setShowMap(false)}
        TransitionComponent={Transition}
      >
        <Fab
          aria-label={"close"}
          color={"primary"}
          size="medium"
          sx={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            zIndex: (props) => {
              return props.zIndex.drawer + 1;
            },
          }}
          onClick={() => setShowMap(false)}
        >
          <CloseIcon />
        </Fab>
        <LostPetLocation position={position} image={image} fullScreen={false} />
      </Dialog>
      <Dialog
        TransitionComponent={Transition}
        disableEscapeKeyDown={true}
        fullScreen
        open={showCommets}
        onClose={() => setShowCommets(false)}
        PaperProps={{ sx: { display: "initial" } }}
      >
        <Fab
          aria-label={"close"}
          color={"primary"}
          size="medium"
          sx={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            zIndex: (props) => {
              return props.zIndex.drawer + 1;
            },
          }}
          onClick={() => setShowCommets(false)}
        >
          <CloseIcon />
        </Fab>
        <LostPetComments idLostPet={idLostPet} idAuthorPost={idAuthorPost} />
      </Dialog>
    </>,
    document.body
  );
};

export default Actions;
