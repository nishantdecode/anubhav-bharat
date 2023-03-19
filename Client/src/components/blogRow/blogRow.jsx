import React from 'react'
import {Box} from "@mui/material";
import Lg from "../../images/lodhigarden.jpg";
import hc from "../../images/hc4.jpg";
import food from "../../images/food5.jpeg";
import eco from "../../images/eco3.jpg";
import Bc from "../../images/butterchicken.webp";


const BlogRow = () => {
  
  return (
        <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${Lg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Box sx={{textAlign:'center', color:'white', fontSize:'2rem', fontWeight:'500'}}><h6>Heritage Blogs</h6></Box>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${hc})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Box sx={{textAlign:'center', color:'white', fontSize:'2rem', fontWeight:'500'}}><h6>Cultural Blogs</h6></Box>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${food})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Box sx={{textAlign:'center', color:'white', fontSize:'2rem', fontWeight:'500'}}><h6>Local Market of India</h6></Box>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${eco})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Box sx={{textAlign:'center', color:'white', fontSize:'2rem', fontWeight:'500'}}><h6>Eco Tourism in India</h6></Box>
        </Box>
        <Box sx={{display:'flex', width: '200px', height:'270px', justifyContent:'center', backgroundcolor:'Black', backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)', opacity:'0.8', alignItems:'center', backgroundImage:`url(${Bc})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", borderRadius:'16px', }}>
        <Box sx={{textAlign:'center', color:'white', fontSize:'2rem', fontWeight:'500'}}><h6>Food Blogs</h6></Box>
        </Box>
        </Box>
  )
}

export default BlogRow