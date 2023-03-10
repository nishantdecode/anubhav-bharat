import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';

const Blogs = () => {
  return (
    <Box>
        <Navbar active="Blogs" />
        <Footer/>
    </Box>
  )
}

export default Blogs