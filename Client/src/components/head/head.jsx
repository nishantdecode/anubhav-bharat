import React from 'react'
import {Box} from "@mui/material";
import Bg from "../../images/Spiritual.jpg"

const Head = () => {
  
  return (
        <Box sx={{display:'flex', width: '100%', height:'400px',justifyContent:'center', backgroundcolor:'Black',backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)' ,opacity:'0.8', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:'16px'}}>
        
        <Box sx={{align:'center', color:'white', fontWeight:500}}><h1>Discover the diversity and richness of India: A world within a country.</h1></Box>
        </Box>
  )
}

export default Head