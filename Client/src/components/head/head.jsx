import React from 'react'
import {Box, styled} from "@mui/material";
import Bg from "../../images/searchBg.jpg"

const Div = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const SearchBar = () => {
  
  return (
        <Box sx={{display:'flex', width: '100%', height:'400px', justifyContent:'center', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:'16px'}}>
        <Div>Discover the diversity and richness of India: A world within a country.</Div>
        </Box>
  )
}

export default SearchBar