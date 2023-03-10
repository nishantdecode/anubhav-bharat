import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';

const Food = () => {
  return (
    <Box>
        <Navbar active="Food" />
        <Footer/>
    </Box>
  )
}

export default Food