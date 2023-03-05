import React from 'react'
import { Grid, Box } from '@mui/material';

import Navbar from "../../components/navbar/navbar.jsx";
import Hero from '../../components/hero/hero.jsx';
import AboutUs from '../../components/aboutUs/AboutUs.jsx';
import MoreInfo from '../../components/moreInfo/moreInfo.jsx';
import TouristAttraction from '../../components/touristAttraction/touristAttraction.jsx';
import BharatStore from '../../components/bharatStore/bharatStore.jsx';
import FoodChoices from '../../components/foodChoices/foodChoices.jsx';
import BlogSection from '../../components/blogSection/blogSection.jsx';

const home = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Navbar/>
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10}>
            <Hero/>
          </Grid>
          <Grid item xs={12} md={10}>
            <AboutUs/>
          </Grid>
          <Grid item xs={12} md={10}>
            <MoreInfo/>
          </Grid>
          <Grid item xs={12} md={10}>
            <TouristAttraction/>
          </Grid>
          <Grid item xs={12} md={10}>
            <BharatStore/>
          </Grid>
          <Grid item xs={12} md={10}>
            <FoodChoices/>
          </Grid>
          <Grid item xs={12} md={10}>
            <BlogSection/>
          </Grid>
          <Grid item xs={12} md={10}>
            <Box sx={{height: '50px', backgroundColor:'#CECECE'}}></Box>
          </Grid>
        </Grid>
      </Box>
  )
}

export default home

