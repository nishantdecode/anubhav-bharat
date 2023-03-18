import React from 'react'
import {Box} from "@mui/material";
import Bg from "../../images/Spiritual.jpg"

const Head = () => {
  
  return (
        <Box sx={{display:'flex', width: '100%', height:'400px',justifyContent:'center', backgroundcolor:'Black', opacity:'0.8', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:'16px'}}>
        
        <Box variant='h2' align='center' color={'white'} fontSize = '3.5rem' fontWeight={500}>Discover the diversity and richness of India: A world within a country.</Box>
        </Box>
  )
}

export default Head