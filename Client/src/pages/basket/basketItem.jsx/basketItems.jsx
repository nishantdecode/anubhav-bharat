import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Jama from '../../../images/jama.jpg'

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CancelIcon from '@mui/icons-material/Cancel';


const BasketItems = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={11} sm={9} md={7} lg={8} xl={8}>
        <Card sx={{display:{xs:'none', sm:'flex', md:'flex'}, borderRadius:'16px', boxShadow:1, width:'100%'}}>
          <CardMedia
            component="img"
            sx={{ display:'flex', width:'30%'}}
            image={Jama}
            alt="LodhiGarden"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width:'70%', p:2, py:4}}>
            <Box sx={{display:'flex', flexGrow:1, flexDirection:'column', px: 2, mb:2}}>
              <Typography component="div" variant="h4" fontWeight="bold" sx={{mb:1}}>
                New Delhi and Old Delhi City Tour
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                  ₹1500
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'row', alignItems: 'flex-end', justifyContent:'center', maxHeight:"80%", px: 2}}>
              <Box sx={{display:'flex', flexDirection:'column', width:'80%', maxHeight:"200px", pr:2}}>
                <Box sx={{display:'flex', flexDirection:'row', mt:1}}>
                    <PersonIcon sx={{color: 'primary.main'}}/>
                    <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary'}}>Adults</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', mt:1}}>
                    <CalendarMonthIcon sx={{color: 'primary.main'}}/>
                    <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary'}}>Date</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', mt:1}}>
                    <CancelIcon sx={{color: 'primary.main'}}/>
                    <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary'}}>Free Cancellation</Typography>
                </Box>
              </Box>
              <Box sx={{display:'flex', flexDirection:'column', width:'20%', mb:1, mr:1}}>
                <Button variant="outlined" onClick={() => {}} sx={{width:'100px', border:'0px', "&:hover": { border: '0px'},}}>Delete</Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={11} sm={9} md={5} lg={4} xl={4}>
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'100%', backgroundColor:'white',p:2, py:5, boxShadow:1, borderRadius:'16px', gap:2}}>
          <Typography variant='h4' textAlign="left" fontWeight="bold" sx={{width:'90%', mb:2}}>
            Review Order Details
          </Typography>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'90%'}}>
            <Typography fontWeight="bold" color="text.secondary" sx={{flexGrow:1}}>Booking Fee</Typography>
            <Typography fontWeight="medium">₹0.00</Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'90%'}}>
            <Typography fontWeight="bold" color="text.secondary" sx={{flexGrow:1}}>Subtotal</Typography>
            <Typography fontWeight="medium">₹4500.00</Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'90%', mb:1}}>
            <Typography fontWeight="bold" color="text.primary" sx={{flexGrow:1}}>Total</Typography>
            <Typography fontWeight="medium">₹4500.00</Typography>
          </Box>
          <Typography textAlign="left" fontWeight="bold" color="text.secondary" fontSize="12px" width="90%">No addition taxes & fees</Typography>
          <Button variant='register' sx={{color: 'primary', width:'45%' ,height:'45px', fontSize:'16px'}} onClick={()=>{}}>
              Checkout
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default BasketItems