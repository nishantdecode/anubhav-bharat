import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const TourCard = ({image, heading, subHeading, rating, price}) => {
  return (
    <Card sx={{ width:'250px', borderRadius:'16px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt="Tourist Attraction"
        />
        <CardContent sx={{p:2}}>
          <Typography gutterBottom variant="body2" component="div" sx={{color:'text.primary', fontWeight:'bold'}}>
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'14px', mb:1}}>
            {subHeading}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'12px'}}>
            <StarIcon sx={{color:'primary.main', height:'12px', width:'12px'}}/>{rating}
          </Typography>
          <Typography variant="body2" color="primary.main" sx={{fontSize:'16px', fontWeight:'bold'}}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default TourCard