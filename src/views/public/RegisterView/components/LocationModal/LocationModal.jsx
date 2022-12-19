import React, { useState } from "react";
import { Dialog, Fab, Slide } from "@mui/material";
import Location from "../../../../../components/common/Location";
import CloseIcon from "@mui/icons-material/Close";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LocationModal = ({ location, setlocation }) => {
  const [show, setshow] = useState(false);
  return (
    <>
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
        onClick={() => setshow(true)}
      >
        <AddLocationAltIcon />
      </Fab>
      <Dialog
        disableEscapeKeyDown={true}
        fullScreen
        open={show}
        onClose={() => setshow(false)}
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
          onClick={() => setshow(false)}
        >
          <CloseIcon />
        </Fab>
        <Location location={location} setlocation={setlocation} />
      </Dialog>
    </>
  );
};

export default LocationModal;
