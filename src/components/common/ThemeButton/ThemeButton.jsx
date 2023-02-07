import { useTheme } from "@mui/material";
import React from "react";
import { MaterialUISwitch } from "./themeButton.style";

const ThemeButton = () => {
  const theme = useTheme();
  const handleClick = () => {
    theme.changeTheme();
  };
  return (
    <>
      <MaterialUISwitch
        checked={theme.palette.mode === "dark"}
        onClick={handleClick}
      />
    </>
  );
};

export default ThemeButton;
