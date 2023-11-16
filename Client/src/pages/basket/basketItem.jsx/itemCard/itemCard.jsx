import React from 'react'
import { Box, Button, Card, CardMedia, Typography } from '@mui/material'

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CancelIcon from '@mui/icons-material/Cancel';

import Tours from '../../../../data/tours';

const ItemCard = ({tourId, adults, date}) => {
  const filteredTour = Tours.filter((tour) => tour.tourId.includes(tourId))[0]
  const handleDelete = () => {
    const basketTours = localStorage.getItem('basket');
    const basket = JSON.parse(basketTours);
    const filteredBasket = basket.filter((tour) => tour.tourId !== tourId ? tour : '')
    const newBasketObj = JSON.stringify(filteredBasket);
    localStorage.setItem('basket', newBasketObj);
    console.log(filteredBasket);
    window.location.href='https://anubhav-bharat-g6z56bxzv-nishant-decode.vercel.app/basket'
  }
  return (
      <>
        <Card sx={{display:{xs:'none', sm:'flex', md:'flex'}, borderRadius:'16px', boxShadow:1, width:'100%', mb:2}}>
          <CardMedia
            component="img"
            sx={{ display:'flex', width:'30%'}}
            image={filteredTour.image}
            alt="LodhiGarden"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width:'70%', p:2, py:4}}>
            <Box sx={{display:'flex', flexGrow:1, flexDirection:'column', px: 2, mb:2}}>
              <Typography component="div" variant="h4" fontWeight="bold" sx={{mb:1}}>
                {filteredTour.tourTitle}
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {filteredTour.price}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'row', alignItems: 'flex-end', justifyContent:'center', maxHeight:"80%", px: 2}}>
              <Box sx={{display:'flex', flexDirection:'column', width:'80%', maxHeight:"200px", pr:2}}>
                <Box sx={{display:'flex', flexDirection:'row', mt:1}}>
                    <PersonIcon sx={{color: 'primary.main'}}/>
                    <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary'}}>Adults: {adults}</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', mt:1}}>
                    <CalendarMonthIcon sx={{color: 'primary.main'}}/>
                    <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary'}}>Date: {date}</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', mt:1}}>
                    <CancelIcon sx={{color: 'primary.main'}}/>
                    <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary'}}>Free Cancellation</Typography>
                </Box>
              </Box>
              <Box sx={{display:'flex', flexDirection:'column', width:'20%', mb:1, mr:1}}>
                <Button variant="outlined" onClick={handleDelete} sx={{width:'100px', border:'0px', "&:hover": { border: '0px'},}}>Delete</Button>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card sx={{display:{xs:'flex', sm:'none', md:'none'}, flexDirection:'column', width:'100%', borderRadius:'16px', mb:2}}>
            <CardMedia
              component="img"
              height="220"
              image={filteredTour.image}
              alt="Tourist Attraction"
            />
              <Typography textAlign="center" component="div" variant="h5" fontWeight="bold" sx={{mt:1}}>
                {filteredTour.tourTitle}
              </Typography>
              <Typography textAlign="center" variant="h6" fontWeight="medium">
                {filteredTour.price}
              </Typography>
              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%', mt:2, px:2}}>
                <PersonIcon sx={{color: 'primary.main'}}/>
                <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary', fontSize:'16px'}}>Adults: {adults}</Typography>
              </Box>
              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%', mt:1, px:2}}>
                  <CalendarMonthIcon sx={{color: 'primary.main'}}/>
                  <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary', fontSize:'16px'}}>Date: {date}</Typography>
              </Box>
              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%', mt:1, px:2}}>
                  <CancelIcon sx={{color: 'primary.main'}}/>
                  <Typography sx={{ml:2, fontWeight:'medium', color:'text.secondary', fontSize:'16px'}}>Free Cancellation</Typography>
              </Box>
              <Box sx={{display:'flex',justifyContent:'center', width:'100%', my:2}}>
                  <Button variant="outlined" onClick={handleDelete} sx={{width:'100px'}}>Delete</Button>
              </Box>
        </Card>
      </>
  )
}

export default ItemCard