import React from 'react'
import BookingForm from './bookingForm/bookingForm.jsx'
import TourCarousel from './tourCarousel/tourCarousel.jsx'
import { Grid, Typography, Box } from '@mui/material'

const TourPageHead = ({tourTitle, carousel}) => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={12} xl={12}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Typography textAlign="center" sx={{fontSize:{xs:'28px', sm:'32px', md:'36px', lg:'40px'}, fontWeight:'bold', mb:1}}>{tourTitle}</Typography>
          <Box sx={{display:{xs:'block', sm:'block', md:'none', lg:'none'}, width:'80px', height:'3px', backgroundColor:'primary.main'}} />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} xl={3} sx={{height:{xs:'80vh', sm:'80vh', md:'70vh', lg:'80vh'}}}>
        <BookingForm/>
      </Grid>
      <Grid item xs={12} md={8} xl={9} sx={{height:{xs:'50vh', sm:'60vh', md:'70vh', lg:'80vh'}}}>
        <TourCarousel carousel={carousel}/>
      </Grid>
    </Grid>
  )
}

export default TourPageHead