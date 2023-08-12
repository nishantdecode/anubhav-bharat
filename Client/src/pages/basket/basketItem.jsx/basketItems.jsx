import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ItemCard from './itemCard/itemCard'

import Tours from '../../../data/tours';

const BasketItems = () => {
  const basketTours = localStorage.getItem('basket');
  const basket = JSON.parse(basketTours);
  let total = 0
  basket.forEach((basketItem)=>{total += Tours.filter((tour) => tour.tourId === basketItem.tourId ? tour : '')[0].price})
  total = parseFloat(total).toFixed(2)
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item xs={11} sm={9} md={7} lg={8} xl={8}>
        {basket ? (
          basket.map((basketItem)=>{
            return <ItemCard key={basketItem.tourId} tourId={basketItem.tourId} adults={basketItem.adults} date={basketItem.dateTime}/>
          })
        ) : (
            <Typography variant="h2" fontWeight="bold" color="text.secondary" textAlign="center" sx={{p:2, width:'100%'}}>Basket Empty! Add tours.</Typography>
        )}
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
            <Typography fontWeight="medium">{total}</Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'90%', mb:1}}>
            <Typography fontWeight="bold" color="text.primary" sx={{flexGrow:1}}>Total</Typography>
            <Typography fontWeight="medium">{total}</Typography>
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