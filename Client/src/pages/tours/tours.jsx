import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import SearchBar from '../../components/searchBar/searchBar.jsx';
import TourCardRow from '../../components/tourCardRow/tourCardRow.jsx';

import Bestseller from '../../data/bestseller.js';
import TourContent from '../../components/tourContent/tourContent.jsx';
import Testimonials from '../../components/testimonials/testimonials.jsx';


const Tours = () => {
  return (
    <Box>
        <Navbar active="Activities" />
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10}>
            <SearchBar/>
          </Grid>
          <Grid item xs={12} md={10}>
            <TourContent/>
          </Grid>
          <Grid item xs={12} md={10}>
            <Testimonials/>
          </Grid>
          <Grid item xs={12} md={10}>
            <TourCardRow data={Bestseller} titleHeading="WAYS TO EXPERIENCE INDIA" titleDesc="The amazing Experiences around India!" />
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Tours