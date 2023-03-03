import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import React from 'react'

const ReviewCard = ({heading, loc, image}) => {
  return (
    <Card sx={{ width:'90%', borderRadius:'16px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={image}
          alt="Tourist Attraction"
        />
        <CardContent sx={{p:4}}>
          <Typography gutterBottom variant="body2" component="div" sx={{color:'text.primary', fontWeight:'bold'}}>
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'14px'}}>
            {loc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ReviewCard