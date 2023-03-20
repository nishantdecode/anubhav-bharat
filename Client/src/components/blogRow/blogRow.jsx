import React from 'react'
import {Typography, Box} from "@mui/material";
import Lg from "../../images/lodhigarden.jpg";
import hc from "../../images/hc4.jpg";
import food from "../../images/food5.jpeg";
import eco from "../../images/eco3.jpg";
import Bc from "../../images/butterchicken.webp";


const BlogRow = () => {
  
  return (
        <Box sx={{display:'flex', gap:'15px', overflow:'scroll'}}>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${Lg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Typography Align='center' color='white' variant='h6' fontWeight='500'>Heritage Blogs</Typography>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${hc})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Typography Align='center' color='white' variant='h6' fontWeight='500'>Cultural Blogs</Typography>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${food})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Typography Align='center' color='white' variant='h6' fontWeight='500'>Local Market of India</Typography>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${eco})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Typography Align='center' color='white' variant='h6' fontWeight='500'>Eco Tourism in India</Typography>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${Bc})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Typography Align='center' color='white' variant='h6' fontWeight='500'>Food Blogs</Typography>
        </Box>
        </Box>
  )
}

export default BlogRow