import React from "react";
import ReactDOM from "react-dom";
import { Dialog, Fab, Slide } from "@mui/material";
// import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import SelectPointsMap from "../SelectPointsMap/SelectPointsMap";

import { Refresh as RefreshIcon } from "@mui/icons-material";
// import LostPetLocation from "../LostPetLocation";
// import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";
// import LostPetComments from "../LostPetComments";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SelectPointModal = ({
  showShareLocationModal,
  setShowShareLocationModal,
  points,
  setPoints,
}) => {
  return ReactDOM.createPortal(
    <>
      <Dialog
        disableEscapeKeyDown={true}
        fullScreen
        open={showShareLocationModal}
        onClose={() => setShowShareLocationModal(false)}
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
          onClick={() => setShowShareLocationModal(false)}
        >
          <CloseIcon />
        </Fab>
        <Fab
          aria-label={"refresh"}
          color={"primary"}
          size="medium"
          sx={{
            position: "fixed",
            bottom: "5rem",
            right: "1rem",
            zIndex: (props) => {
              return props.zIndex.drawer + 1;
            },
          }}
          onClick={() => setPoints([])}
        >
          <RefreshIcon />
        </Fab>
        <SelectPointsMap points={points} setPoints={setPoints} />
      </Dialog>
    </>,
    document.body
  );
};

export default SelectPointModal;
