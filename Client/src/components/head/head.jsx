import React from 'react'
import {Typography, Box} from "@mui/material";
import Bg from "../../images/Spiritual.jpg"

const Head = () => {
  
  return (
        <Box sx={{display:'flex', width: '100%', height:'400px',justifyContent:'center', backgroundcolor:'Black',backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.5)' ,opacity:'0.8', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:'16px'}}>
        <Box sx={{flexgrow:'1', width:{xs:'95%', sm:'80%', md:'75%', lg:'65%'}}}><Typography align='center' color='white'fontWeight='700' variant='h2'>Discover the diversity and richness of India: A world within a country.</Typography></Box>
        </Box>
  )
}

export default Head