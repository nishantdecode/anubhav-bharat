import React from 'react'
import {Typography, Box} from "@mui/material";
import lodhigarden from "../../../images/lodhigarden.jpg";
import culture from "../../../images/holi.jpg";
import food from "../../../images/food5.jpeg";
import eco from "../../../images/eco1.jpg";
import localMarket from "../../../images/localmarket.jpg"

const data=[
  {
    img: lodhigarden,
    name: "Heritage Blogs"
  },
  {
    img: culture,
    name: "Cultural Blogs"
  },
  {
    img: food,
    name: "Local Market of India"
  },
  {
    img: eco,
    name: "Eco Tourism in India"
  },
  {
    img: localMarket,
    name: "Food Blogs"
  }
]

const BlogRow = () => {
  
  return (
        <Box sx={{display:'flex', gap:'10px', width:'100%', flexWrap:'nowrap', overflow:"auto", px:2, pb:3}}>
          {data.map((category) => {
            return (
              <Box 
                key={category.name} 
                sx={{
                  display:'flex', 
                  minWidth:'200px', 
                  width:{md:'20%'}, 
                  height:'270px', 
                  justifyContent:'center', 
                  backgroundColor:'rgba(0,0,0,0.5)', 
                  backgroundBlendMode:'Darken', 
                  alignItems:'center', 
                  backgroundImage:`url(${category.img})`, 
                  backgroundRepeat: "no-repeat", 
                  backgroundPosition: "center", 
                  backgroundSize: "cover", 
                  borderRadius:'16px'
                }}
              >
                <Typography textAlign='center' color='white' variant='h6' fontWeight='500'>{category.name}</Typography>
              </Box>
            )
          })} 
        </Box>
  )
}

export default BlogRow