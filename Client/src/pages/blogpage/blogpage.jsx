import React from 'react'
import { Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';

const Blogpage = () => {
  return (
    <Box>
        <Navbar active="Blogs" />
        <main/>
        <Footer/>
    </Box>
  )
}

export default Blogpage 