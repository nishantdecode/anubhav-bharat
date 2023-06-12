import React from 'react'
import { Grid, Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import Testimonials from '../../components/cards/testimonials/testimonials.jsx';
import TourCardRow from '../../components/cards/tourCardRow/tourCardRow.jsx';
import DisplayCardRow from '../../components/cards/displayCardRow/displayCardRow.jsx';
import TourPageHead from './tourPageHead/tourPageHead.jsx'
import MoreInfo from '../../components/moreInfo/moreInfo.jsx';

import Users from '../../data/testimonials.js'
import BharatStore from '../../data/bharatStore.js';
import Bestseller from '../../data/bestseller.js';
import FoodTour from '../../data/foodTour.js';
import Overview from './overview/overview.jsx';
import Tours from '../../data/tours.js'
import TourMap from './tourMap/tourMap.jsx';

const Tourpage = () => {
  const [searchParams] = useSearchParams()
  const tourInfo = (Tours.filter((tour) => tour.tourId === searchParams.get('tourId') ? tour : '' ))[0]
  return (
    <Box>
        <Navbar active="Activities" />
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10} xl={8}>
            <TourPageHead tourTitle={tourInfo.tourTitle} carousel={tourInfo.carousel}/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <Overview desc={tourInfo.tourDescription} />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourMap map={tourInfo.map}/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <MoreInfo/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <DisplayCardRow data={BharatStore} titleHeading="EXPLORE THE LOCAL BHARAT STORE" titleDesc="Welcome to Indian Handicrafts!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={Bestseller} titleHeading="RECOMMENDED TOURS" titleDesc="The amazing Experiences around India!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={FoodTour} titleHeading="EXPERIENCE THE LOCAL FOODS" titleDesc="The amazing Experiences around India!" />
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <Testimonials data={Users}/>
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Tourpage