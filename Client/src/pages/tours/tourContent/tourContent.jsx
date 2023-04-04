import React from 'react'
import { Box, Button, Paper, Modal, Typography } from "@mui/material";
import BookTourCard from '../bookTourCard/bookTourCard.jsx'
import { useState, useEffect } from "react"
import { useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import TuneIcon from '@mui/icons-material/Tune';
import { css, keyframes } from "@emotion/react";

import {languageOptions, durationOptions} from "../../../data/options.js"
import FilterPanel from '../filterPanel/filterPanel.jsx';
import Tours from '../../../data/tours.js';

function valueLabelFormat(value) {
  const units = '₹';
  return `${units} ${value}`;
}

const animation = keyframes`
  0% {
    -webkit-transform: translateY(-5%);
            transform: translateY(-5%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }`

const animatedItem = css`
  animation: ${animation} 1000ms ease-in-out none;
`;

const TourContent = () => {
  const navigate = useNavigate();
  const params = useParams()
  const [searchParams] = useSearchParams()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const destination = params.destination
  const category = params.category
  const date = searchParams.get('date')
  
  const [languages, setLanguages] = useState(searchParams.get('language')?.split(',') || []);
  const [duration, setDuration] = useState(searchParams.get('duration')?.split(',') || [])
  const [price, setPrice] = useState(Number(searchParams.get('price')) || 1000);

  const handlePrice = (event, newValue) => {
      setPrice(newValue);
  };

  let filteredTours = Tours

  if (languages.length) {
    languages.forEach((choice) => {
      filteredTours = filteredTours.filter((tour) =>
        tour.language.includes(choice)
      )
    })
  }
  
  if (duration.length) {
    filteredTours = filteredTours.filter((tour) => 
      duration.includes(String(tour.duration))
    );
  }


  filteredTours = filteredTours.filter(
    (tour) => tour.price <= price
  );  

  useEffect(() => {
    if(languages && duration)
      navigate(`/${destination}/${category}/?date=${date}&language=${languages}&price=${price}&duration=${duration}`);
  }, [languages, duration, price, category, destination, date, navigate]);

  return (
    <>
      <Box css={animation} sx={{display:'flex', flexDirection:'column', width:'100%', alignItems:'center', justifyContent:'center', mb:{xs: 3, sm:3, md:7}}}>
        <Typography variant="h3" textAlign="center">{category} in {destination}</Typography>
        <Button variant='outlined' onClick={handleOpen} sx={{display:{xs:'flex', sm:'flex', md:'none'}, mt:2}}><TuneIcon sx={{width:'32px', height:'32px', mr:2}}/>Filter Tours</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width:{xs:'70%', sm:'50%'}}}>
          <Paper sx={{px:5, py:3, boxShadow:1, borderRadius:'10px'}}>
            <FilterPanel
              languageOptions = {languageOptions}
              languages = {languages}
              setLanguages = {setLanguages}
              valueLabelFormat = {valueLabelFormat}
              price = {price}
              handlePrice = {handlePrice}
              durationOptions = {durationOptions}
              duration = {duration}
              setDuration = {setDuration}
            />
          </Paper>
        </Box>
      </Modal>
      <Box gap={4} sx={{display:'flex', justifyContent:'center', width:'100%'}}>
        <Box sx={{display:{xs:'none', sm:'none' , md:'block'}, width:'25%'}}>
          <Paper sx={{px:5, py:5, boxShadow:1, borderRadius:'16px', mr:2}}>
            <FilterPanel
              languageOptions = {languageOptions}
              languages = {languages}
              setLanguages = {setLanguages}
              valueLabelFormat = {valueLabelFormat}
              price = {price}
              handlePrice = {handlePrice}
              durationOptions = {durationOptions}
              duration = {duration}
              setDuration = {setDuration}
            />
          </Paper>
        </Box>
        <Box gap={3} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', width:{xs:'100%', sm:'90%', md:'75%'}}}>
          {filteredTours.map((tour)=>{
            return <BookTourCard key={tour.tourId} image={tour.image} tourTitle={tour.tourTitle} tourLocation={tour.tourLocation} tourDescription={tour.tourDescription} reviews={tour.reviews} rating={tour.rating} price={tour.price} animation={animatedItem}/>
          })}
        </Box>
      </Box>
    </>
  )
}

export default TourContent
