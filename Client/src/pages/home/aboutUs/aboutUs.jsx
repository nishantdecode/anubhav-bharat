import React from 'react'
import { HeroImage } from './aboutUs.js'
import { Typography, Paper, Box, Grid, Button } from '@mui/material'
import Bg from "../../../images/Taj.jpeg";
import Blg from "../../../images/taj_interior.jpg";

const AboutUs = () => {
  return (
    <Grid container spacing={10} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} sx={{display:{ md: 'none'}}}>
          <Box>
            <Paper
              sx={{
                display: { md: 'none', lg: 'none'},
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${Bg})`,
              }}>
              {<img style={{ display: 'none' }} src={Bg} alt={'Text'} />}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.6)',
                }}
              />
              <Grid container>
                <Grid item xs={12} sm={12} md={12} sx={{display:'flex', justifyContent:'center' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },
                      width: {xs:'95%', sm:'60%'}
                    }}
                  >
                    <Typography color="inherit" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold', textAlign: 'center'}} gutterBottom>
                      ABOUT US
                    </Typography>
                    <Typography variant="h3" color="backgroung.paper" sx={{textAlign: 'center'}} paragraph>
                      Our tour plan is to give you  an authentic Experience of Incredible India!
                    </Typography>
                    <Typography variant="body2" color="backgroung.paper" sx={{textAlign: 'center'}} paragraph>
                      “Monuments and heritage sites are the rich essence of diversity and reflection of our culture”
                    </Typography>
                    <Button variant="text" sx={{color: 'primary.main', fontWeight:600}} >Learn More</Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={4} sx={{display:{ xs:'none', sm:'none', md:'flex', lg:'flex' }}}>
            <Box sx={{display:'flex', ml: 2}}>
                <HeroImage src={Blg} alt="heroImg"/>
            </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={8} sx={{display:{ xs:'none', sm:'none', md:'flex', lg:'flex' }}}>
            <Box sx={{display:'flex', justifyContent: 'centre', flexDirection: 'column', pl:15}} >
                <Typography color="inherit" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
                  ABOUT US
                </Typography>
                <Typography variant="h2" color="text.primary" paragraph>
                  Our tour plan is to give you an authentic Experience of Incredible India!
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  “Monuments and heritage sites are the rich essence of diversity and reflection of our culture”
                </Typography>
                <Button variant="text" sx={{color: 'primary.main', fontWeight:600, width:'90px', ml:-1}} >Learn More</Button>
            </Box>
        </Grid>
    </Grid>
  )
}

export default AboutUs