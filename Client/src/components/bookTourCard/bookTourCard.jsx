import React from 'react'
import { Box, Typography, Card, CardMedia, Rating, Button } from '@mui/material'

import LodhiGarden from "../../images/lodhigarden.jpg"
//comment
const BookTourCard = () => {
  return (
    <Card sx={{ display: 'flex', m:2, borderRadius:'16px', boxShadow:1, height:'300px'}}>
      <CardMedia
        component="img"
        sx={{ display:'flex', width:'30%', height:'300px' }}
        image={LodhiGarden}
        alt="LodhiGarden"
      />  
      <Box sx={{ display: 'flex', flexDirection: 'column', height:'300px', p:2}}>
        <Box sx={{ display:'flex', flexDirection:'column', height:'20%', px: 2, pb: 1 }}>
          <Typography component="div" variant="h4" fontWeight="bold">
            New Delhi and Old Delhi City Tour
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Delhi
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection:'row', alignItems: 'flex-end', height:'80%', px: 2, pb: 1 }}>
          <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', pr:2}}>
            <Typography variant="subtitle1" color="text.secondary" sx={{lineHeight:1.4, textOverflow:'ellipsis'}} component="div">
              This diversity is also visible in the spheres of religion. The major religions of India 
              are Hinduism (majority religion), Islam (largest minority religion), Sikhism, Christianity,
               Buddhism, Jainism, Zoroastrianism, Judaism and the Bahá'í Faith.
            </Typography>
            <Box sx={{display:'flex', flexDirection:'row', mt:2}}>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} sx={{mb:2}} readOnly />
                <Typography>20 reviews</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', pb:2}}>
            <Typography sx={{lineHeight:0.9, pl:2}} gutterBottom={false}>
              from <br/>
            </Typography>
            <Typography sx={{color:'primary.main', fontSize:'24px', fontWeight:'bold',pl:2, lineHeight:1.0}} gutterBottom={false}>₹1550<br/></Typography>
            <Typography sx={{lineHeight:0.8, pl:2, pb:2}}>per adult</Typography>
            <Button variant="outlined" sx={{width:'100px'}}>Book Now</Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default BookTourCard