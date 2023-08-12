import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Location = () => {
  return (
    <Grid spacing={3} container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6} xl={6}>
        <Box sx={{height:{xs:'400px', sm:'400px', md:'400px'}, width:"100%", borderRadius:'16px', overflow:'hidden'}}>
          <iframe title="Tour Location Map" width="100%" height="400px" frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp&height=100%25&amp&hl=en&amp&q=Humayun's%20Tomb,%20monument,%20Delhi,%20India+(Anubhav%20Bharat)&amp&t=&amp&z=15&amp&ie=UTF8&amp&iwloc=B&amp&output=embed"></iframe>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} xl={6}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', height:{xs:'400px', sm:'400px', md:'400px'}, borderRadius:'16px', overflow:'hidden', p:3, gap:2}}>
            <Typography textAlign="left" variant='h3' fontWeight="bold" color="text.primary">Our Main Office Location</Typography>
            <Box sx={{width:'20%' , height:"4px", backgroundColor:'primary.main', border:'none', mt:-1}}/>
            <Typography textAlign="left" variant='h5' fontWeight="medium" color="text.secondary">Address: </Typography>
            <Typography textAlign="left" variant='h5' fontWeight="medium" color="text.secondary">Mobile No: </Typography>
            <Typography textAlign="left" variant='h5' fontWeight="medium" color="text.secondary">Telephone: </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Location