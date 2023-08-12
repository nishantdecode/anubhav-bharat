import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { deepmerge } from '@mui/utils';

import './App.css';
import Home from "./pages/home/home.jsx";
import Activities from "./pages/activities/activities.jsx";
import Blogs from "./pages/blogs/blogs.jsx";
import Contact from "./pages/contact/contact.jsx";
import Blogpage from "./pages/blogpage/blogpage.jsx"

import { darkTheme } from "./themes/dark.js";
import { lightTheme } from "./themes/light.js";
import { baseTheme } from "./themes/base.js";
import { ColorContext } from "./context/ColorContext.js";
import Tours from './pages/tours/tours.jsx';
import Tourpage from './pages/tourPage/tourpage';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Register from './pages/register/register';
import Basket from './pages/basket/basket';


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
            <ScrollToTop/>
            <CssBaseline enableColorScheme />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/basket" element={<Basket/>}/>
              <Route path="/:destination" element={<Activities/>}/>
              <Route path="/:destination/:category" element={<Tours/>}/>
              <Route path="/tourpage" element={<Tourpage/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/blogpage" element={<Blogpage/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
