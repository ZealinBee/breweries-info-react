import React, { useContext } from "react";
import { ThemeModeContext } from "../App";
import { Button } from "@mui/material";

function ThemeToggleButton() {
  const changeMode = useContext(ThemeModeContext);
  const toggleMode = () => {
    if(changeMode) {
        changeMode();
    }
  }

  return <Button onClick={toggleMode} variant="outlined" color="secondary">Toggle Theme</Button>;
}

export default ThemeToggleButton;
