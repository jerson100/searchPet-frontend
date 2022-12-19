import React, { useCallback, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import JeInputTextError from "../JeInputTextError";

const JePasswordInput = ({ ...props }) => {
  const [show, setshow] = useState(false);
  const handleChange = useCallback(() => {
    setshow((s) => !s);
  }, []);
  return (
    <JeInputTextError
      {...props}
      type={show ? "text" : "password"}
      Icon={show ? Visibility : VisibilityOffIcon}
      handleIconClick={handleChange}
    />
  );
};

export default JePasswordInput;
