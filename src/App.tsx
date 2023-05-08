import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BreweryPage from "./pages/BreweryPage";
import "./styles/styles.scss";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

type ChangeThemeFunc = () => void;
export const ThemeModeContext = React.createContext<ChangeThemeFunc | null>(null);

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  const theme = createTheme({
    palette:
      mode === "light"
        ? {
            primary: {
              main: "#F2F4CB",
            },
            secondary: purple,
          }
        : {
            primary: {
              main: "#272838",
            },
            secondary: {
              main: purple[200],
            },
          },
    typography: {
      fontFamily: "Lato",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeModeContext.Provider value={changeMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breweries/:id" element={<BreweryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default App;
