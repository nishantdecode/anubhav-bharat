import React from 'react'
import { Grid, Box } from '@mui/material';

import Navbar from "../../components/navbar/navbar.jsx";
import Hero from './hero/hero.jsx';
import AboutUs from './aboutUs/aboutUs.jsx';
import MoreInfo from '../../components/moreInfo/moreInfo.jsx';
import BlogSection from '../../components/cards/blogSection/blogSection.jsx';
import Testimonials from '../../components/cards/testimonials/testimonials.jsx';
import Footer from '../../components/footer/footer.jsx';
import DisplayCardRow from '../../components/cards/displayCardRow/displayCardRow.jsx';

import TouristAttractions from '../../data/touristAttraction.js';
import BharatStore from '../../data/bharatStore.js';
import FoodChoices from '../../data/foodChoices.js';
import Users from '../../data/testimonials.js';

const Home = () => {

  console.log(Users);
  return (
      <Box>
        <Navbar/>
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10} xl={8}>
            <Hero/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <AboutUs/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <MoreInfo/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <DisplayCardRow data={TouristAttractions}  titleHeading="PLACES TO VISIT" titleDesc="The amazing places around India!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <DisplayCardRow data={BharatStore}  titleHeading="THE BHARAT STORE" titleDesc="Welcome to Indian Handicrafts!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <DisplayCardRow data={FoodChoices}  titleHeading="ANUBHAV FOOD SELECTION" titleDesc="Experience best Indian foods!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <BlogSection/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <Testimonials data={Users}/>
          </Grid>
        </Grid>
        <Footer/>
      </Box>
  )
}

export default Home

