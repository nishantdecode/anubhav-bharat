import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import SearchBar from '../../components/searchBar/searchBar.jsx';
import TourCardRow from '../../components/cards/tourCardRow/tourCardRow.jsx';

import Bestseller from '../../data/bestseller.js';
import TourContent from './tourContent/tourContent.jsx';
import Testimonials from '../../components/cards/testimonials/testimonials.jsx';
import Users from '../../data/testimonials.js'


const Tours = () => {
  return (
    <Box>
        <Navbar active="Activities" />
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10} xl={8}>
            <SearchBar/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourContent/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <Testimonials data={Users}/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={Bestseller} titleHeading="WAYS TO EXPERIENCE INDIA" titleDesc="The amazing Experiences around India!" />
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Tours