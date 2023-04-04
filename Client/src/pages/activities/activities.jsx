import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import SearchBar from '../../components/searchBar/searchBar.jsx';
import TourCardRow from '../../components/cards/tourCardRow/tourCardRow.jsx';

import Bestseller from '../../data/bestseller.js';
import CulturalTour from '../../data/culturalTour.js';
import EcoTour from '../../data/ecoTours.js';
import FoodTour from '../../data/foodTour.js';
import OutdoorActivities from '../../data/outdoor.js';
import SitesDisplay from '../../components/cards/displayCardRow/sitesDisplay.jsx';
import TopAttractions from '../../data/topAttractions.js';


const Activities = () => {
  return (
    <Box>
        <Navbar active="Activities" />
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10} xl={8}>
            <SearchBar/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={Bestseller} titleHeading="WAYS TO EXPERIENCE INDIA" titleDesc="The amazing Experiences around India!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <SitesDisplay data={TopAttractions}/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={CulturalTour} titleHeading="CULTURAL TOURS" titleDesc="The amazing Experiences around India!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={EcoTour} titleHeading="ECO TOURS" titleDesc="The amazing Experiences around India!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={FoodTour} titleHeading="FOOD TOURS" titleDesc="The amazing Experiences around India!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={OutdoorActivities} titleHeading="THINGS TO DO" titleDesc="The amazing Experiences around India!" />
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Activities