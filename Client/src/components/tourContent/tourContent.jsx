import React from 'react'
import { Grid } from '@mui/material'
import Filters from '../filters/filters'
import BookTourCard from '../bookTourCard/bookTourCard'

const TourContent = () => {
  return (
    <Grid container justifyContent="center" alignItems="flex-start">
      <Grid item xs={12} md={3} lg={3}>
        <Filters/>
      </Grid>
      <Grid item xs={12} md={9} lg={9}>
        <BookTourCard/>
      </Grid>
    </Grid>
  )
}

export default TourContent