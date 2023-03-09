import { Box, Rating, Typography, Avatar } from '@mui/material'
import React from 'react'

const ReviewCard = ({image, name, loc, rating, review}) => {
  return (
    <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'centre', alignItems:'centre', width:'300px', minHeight:'400px', backgroundColor:'white',p:2, boxShadow:1, borderRadius:'16px'}}>
        <Box sx={{flexGrow:'1',position:'relative', width:'268px'}}>
            <Avatar alt="User" src={image} sx={{height:'100px', width:'100px',position:'relative', left:'32%', mt:'20%'}} />
        </Box>
        <Typography variant="body2" color="text.primary" textAlign="center" sx={{fontWeight: 'bold'}} gutterBottom>
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{fontWeight: 'regular'}}  paragraph>
            {loc}
        </Typography>
        <Box sx={{ml:9, width:'268px'}}>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </Box>
        
        <Typography variant="body2" color="text.primary" textAlign="center" sx={{fontWeight: 'regular'}}  paragraph>
            {review}
        </Typography>
    </Box>
  )
}

export default ReviewCard