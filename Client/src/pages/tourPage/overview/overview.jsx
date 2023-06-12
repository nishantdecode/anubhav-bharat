import React from 'react'
import { Box, Typography } from '@mui/material';

const Overview = ({desc}) => {
  return (
    <>
      <Box sx={{display:'flex', flexDirection:'column', width:'100%', p:2}}>
        <Typography color="primary.main" textAlign="center" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
          OVERVIEW
        </Typography>
        <Typography variant="h3" textAlign="center" color="text.primary"  paragraph>
          This tour gives you an Incredible Experience
        </Typography>
      </Box>
      <Box sx={{width:'100%', p:2}}>
        <Typography variant="body" textAlign="justify" color="text.primary" paragraph sx={{height:{xs:'70vh', sm:'60vh', md:'100%'}, overflow:'hidden'}}>
          {desc}
        </Typography>
      </Box>
    </>
  )
}

export default Overview