import React from 'react'
import { Box, Grid } from '@mui/material'

const TourMap = ({map}) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={12} xl={12}>
        <Box sx={{height:{xs:'400px', sm:'400px', md:'600px'}, borderRadius:'16px', overflow:'hidden'}}>
          <iframe title="Tour Location Map" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" src={map}></iframe>
        </Box>
      </Grid>
    </Grid>
    )
}

export default TourMap