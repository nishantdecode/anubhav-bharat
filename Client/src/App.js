import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepmerge } from '@mui/utils';

import './App.css';
import Home from "./pages/home/home.jsx";

import { darkTheme } from "./themes/dark.js";
import { lightTheme } from "./themes/light.js";
import { baseTheme } from "./themes/base.js";
import { ColorContext } from "./context/ColorContext.js";


function App() {
  // const user = JSON.parse(localStorage.getItem('profile'));

  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
        setMode((prevMode) => prevMode === "light" ? "dark" : "light");
    },
  }), []);

  const theme = React.useMemo(
    () => createTheme(deepmerge(mode === "light" ? lightTheme : darkTheme, baseTheme)),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container maxWidth="false" disableGutters >
            <CssBaseline enableColorScheme />
            <Routes>
              <Route path="/" element={<Home/>}/>
              {/* <Route path="/hotels" element={<List/>}/>
              <Route path="/hotels/:id" element={<Hotel/>}/>
              <Route path="/login" element={<Login/>}/> */}
              {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts"/> )} /> */}
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
