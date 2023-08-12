import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import React from 'react'

import { useNavigate } from 'react-router-dom'

const DisplayCard = ({heading, loc, image}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width:'90%', borderRadius:'16px'}} onClick={() => navigate('/New%20Delhi/Cultural%20Tourism/?date=2022-04-17')}>
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

export default DisplayCard