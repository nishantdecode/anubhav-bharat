/** @jsxImportSource @emotion/react */
import React from 'react'
import {Typography, Box} from "@mui/material";
import Bg from "../../../images/rishikesh3.jpg"
import { css, keyframes } from "@emotion/react";
import { useTheme } from '@mui/material/styles';

const myEffect = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
}`

const Head = () => {
  const theme = useTheme();
  const animatedItem = css`
    animation: ${myEffect} 2000ms ${theme.transitions.easing.easeInOut};
  `;
  return (
        <Box sx={{display:'flex', width: '100%', height:'350px',justifyContent:'center',backgroundBlendMode:'Darken', background: 'rgba(0,0,0,0.4)' , alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:{sm:'0px', md:'16px'}}}>
          <Box css={animatedItem} sx={{flexgrow:'1', width:{xs:'95%', sm:'80%', md:'75%', lg:'65%'}}}>
            <Typography align='center' color='white'fontWeight='700' sx={{fontSize:{xs:'32px', sm:'36px', md:'38px', lg:'42px'}}}>Discover the diversity and richness of India: A world within a country.</Typography>
          </Box>
        </Box>
  )
}

export default Head