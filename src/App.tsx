import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
            background: {
              default: "#FFFFFF",
            },
            text: {
              primary: "#272838",
            }
          }
        : {
            primary: {
              main: "#272838",
            },
            secondary: {
              main: purple[200],
            },
            background: {
              default: "#272838",
            },
            text: {
              primary: "#FFFFFF",
            }
          },
    typography: {
      fontFamily: "Lato",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/breweries/:id",
      element: <BreweryPage />,
      errorElement: <NotFound />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ])

  return (
    <ThemeModeContext.Provider value={changeMode}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} ></RouterProvider>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default App;
