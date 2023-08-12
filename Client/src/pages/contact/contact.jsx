import React from 'react'
import { Box, Grid } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import Newsletter from './newsletter/newsletter.jsx';
import Location from './location/location.jsx';

const Contact = () => {
  return (
    <Box>
        <Navbar active="Contact" />
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10} lg={10} xl={8}>
            <Newsletter/>
          </Grid>
          <Grid item xs={12} md={10} lg={10} xl={8}>
            <Location/>
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Contact