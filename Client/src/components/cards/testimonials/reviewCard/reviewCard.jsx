import { Box, Rating, Typography, Avatar } from '@mui/material'
import React from 'react'

const ReviewCard = ({image, name, loc, rating, review}) => {
  return (
    <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'300px', minHeight:'400px', backgroundColor:'white',p:2, boxShadow:1, borderRadius:'16px'}}>
        <Avatar alt="User" src={image} sx={{height:'100px', width:'100px', mb:3}} />
        <Typography variant="body2" color="text.primary" textAlign="center" sx={{fontWeight: 'bold'}} gutterBottom>
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{fontWeight: 'regular'}}  paragraph>
            {loc}
        </Typography>
        <Rating name="half-rating-read" defaultValue={Number(rating)} precision={0.5} sx={{mb:2}} readOnly />
        <Typography variant="body2" color="text.primary" textAlign="center" sx={{fontWeight: 'regular'}}  paragraph>
            {review}
        </Typography>
    </Box>
  )
}

export default ReviewCard