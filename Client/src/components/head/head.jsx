import React from 'react'
import {Box} from "@mui/material";

import Bg from "../../images/searchBg.jpg"

const SearchBar = () => {
  
  return (
        <Box sx={{display:'flex', width: '100%', height:'400px', justifyContent:'center', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:'16px'}}>
          
        </Box>
  )
}

export default SearchBar