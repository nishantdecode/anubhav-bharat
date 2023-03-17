import React from 'react'
import { Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';

const Contact = () => {
  return (
    <Box>
        <Navbar active="Contact" />
        <Footer/>
    </Box>
  )
}

export default Contact