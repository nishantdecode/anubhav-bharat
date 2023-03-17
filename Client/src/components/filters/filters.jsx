import { Paper } from '@mui/material'
import React from 'react'
import { useState } from "react"
import { Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox } from '@mui/material';

const Filters = () => {
  const [category, setCategory] = useState({
    culturalTourism: true,
    heritageTourism: false,
    ecoTourism: false,
    foodTourism: false,
    touristAttractions: false,
    outdoorActivities: false,
  });
  const [language, setLanguage] = useState({
    english: true,
    hindi: false,
    german: false,
    russian: false,
    chinese: false,
    spanish: false,
  });
  const [duration, setDuration] = useState({
    oneH: false,
    fourH: false,
    oneD: false,
  });

  const handleChange = (event) => {
    setCategory({
      ...category,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeLang = (event) => {
    setLanguage({
      ...language,
      [event.target.name]: event.target.checked,
    });
  };
  const handleDuration = (event) => {
    setDuration({
      ...duration,
      [event.target.name]: event.target.checked,
    });
  };

  const { culturalTourism, heritageTourism, ecoTourism, foodTourism, touristAttractions, outdoorActivities } = category;
  const error = [culturalTourism, heritageTourism, ecoTourism, foodTourism, touristAttractions, outdoorActivities ].filter((v) => v).length < 1;
  const { english, hindi, german, russian, chinese, spanish } = language;
  const { oneH, fourH, oneD } = duration;
  return (
    <Paper sx={{p:1, py:2, boxShadow:1, borderRadius:'16px', m:2, ml:0}}>
      <Box sx={{ display: 'flex', flexDirection:'column'}}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" error={error}>
          <FormLabel component="legend" sx={{fontWeight:'bold', color:'text.primary', pb:1}}>Categories</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={culturalTourism} onChange={handleChange} name="culturalTourism" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Cultural Tourism"
            />
            <FormControlLabel
              control={
                <Checkbox checked={heritageTourism} onChange={handleChange} name="heritageTourism" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Heritage Tourism"
            />
            <FormControlLabel
              control={
                <Checkbox checked={ecoTourism} onChange={handleChange} name="ecoTourism" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Eco Tourism"
            />
            <FormControlLabel
              control={
                <Checkbox checked={foodTourism} onChange={handleChange} name="foodTourism" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Food Tourism"
            />
            <FormControlLabel
              control={
                <Checkbox checked={touristAttractions} onChange={handleChange} name="touristAttractions" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Tourist Attractions"
            />
            <FormControlLabel
              control={
                <Checkbox checked={outdoorActivities} onChange={handleChange} name="outdoorActivities" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Outdoor Activities"
            />
          </FormGroup>
          <FormHelperText>select atleast one</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" error={error}>
          <FormLabel component="legend" sx={{fontWeight:'bold', color:'text.primary', pb:1}}>Language</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={english} onChange={handleChangeLang} name="english" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="English"
            />
            <FormControlLabel
              control={
                <Checkbox checked={hindi} onChange={handleChangeLang} name="hindi" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Hindi"
            />
            <FormControlLabel
              control={
                <Checkbox checked={german} onChange={handleChangeLang} name="german" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="German"
            />
            <FormControlLabel
              control={
                <Checkbox checked={russian} onChange={handleChangeLang} name="russian" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Russian"
            />
            <FormControlLabel
              control={
                <Checkbox checked={chinese} onChange={handleChangeLang} name="chinese" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Chinese"
            />
            <FormControlLabel
              control={
                <Checkbox checked={spanish} onChange={handleChangeLang} name="spanish" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Spanish"
            />
          </FormGroup>
        </FormControl>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" error={error}>
          <FormLabel component="legend" sx={{fontWeight:'bold', color:'text.primary', pb:1}}>Duration</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={oneH} onChange={handleDuration} name="oneH" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Upto 1 hour"
            />
            <FormControlLabel
              control={
                <Checkbox checked={fourH} onChange={handleDuration} name="fourH" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="Upto 4 hours"
            />
            <FormControlLabel
              control={
                <Checkbox checked={oneD} onChange={handleDuration} name="oneD" sx={{
                  color: "text.primary",
                  '&.Mui-checked': {
                    color: "primary.main",
                  },
                }}/>
              }
              label="4 hours to 1 day"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Paper>
  )
}

export default Filters