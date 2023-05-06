import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BreweryPage from "./pages/BreweryPage";
import "./styles/styles.scss";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({
    palette:
      mode === "light"
        ? {
            primary: {
              main: "#F2F4CB",
            },
            secondary: purple
          }
        : {
            primary: {
              main: "#272838",
            },
            secondary: {
              main: purple[200]
            }
          },
    typography: {
      fontFamily: "Lato",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/breweries/:id"
            element={<BreweryPage></BreweryPage>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
