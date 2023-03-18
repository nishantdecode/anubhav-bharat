import React from 'react'
import BookTourCard from '../bookTourCard/bookTourCard'
import { useState } from "react"
import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch.js"
import { Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, Typography, Paper } from '@mui/material';
import Slider from '@mui/material/Slider'

function valueLabelFormat(value) {
  const units = '₹';
  return `${units} ${value}`;
}

const TourContent = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [category, setCategory] = useState({
    culturalTourism: location.state.category === "Cultural Tourism" ? true : false,
    heritageTourism: location.state.category === "Heritage Tourism" ? true : false,
    ecoTourism: location.state.category === "Eco Tourism" ? true : false,
    foodTourism: location.state.category === "Food Tourism" ? true : false,
    touristAttractions: location.state.category === "Tourist Attractions" ? true : false,
    outdoorActivities: location.state.category === "Outdoor Activities" ? true : false,
  });
  const [language, setLanguage] = useState({
    english: location.state.options.language === "English" ? true : false,
    hindi: location.state.options.language === "Hindi" ? true : false,
    german: location.state.options.language === "German" ? true : false,
    russian: location.state.options.language === "Russian" ? true : false,
    chinese: location.state.options.language === "Chinese" ? true : false,
    spanish: location.state.options.language === "Spanish" ? true : false,
  });
  const [price, setPrice] = useState(1000);


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
  const handlePrice = (event, newValue) => {
      setPrice(newValue);
  };

  const { culturalTourism, heritageTourism, ecoTourism, foodTourism, touristAttractions, outdoorActivities } = category;
  const error = [culturalTourism, heritageTourism, ecoTourism, foodTourism, touristAttractions, outdoorActivities ].filter((v) => v).length < 1;
  const { english, hindi, german, russian, chinese, spanish } = language;

  // const { data, loading, err, reFetch } = useFetch(
  //   `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  // );
  const { data, loading, err, reFetch } = useFetch(location.state.category);

  const handleClick = () => {
    reFetch();
  };
  return (
    <Box sx={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
      <Box sx={{width:'25%'}}>
        <Paper sx={{p:1, py:2, boxShadow:1, borderRadius:'16px', mr:2}}>
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
            <Box sx={{ width:'100%', px:3 }}>
              <Typography id="price" fontWeight="bold" gutterBottom>
                Price: {valueLabelFormat(price)}
              </Typography>
              <Slider
                size="small"
                value={price}
                min={200}
                step={100}
                max={4000}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handlePrice}
                valueLabelDisplay="auto"
                aria-labelledby="price"
                sx={{color:'primary.main'}}
              />
            </Box>
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
          </Box>
        </Paper>
      </Box>
      <Box sx={{width:'75%'}}>
        <BookTourCard/>
      </Box>
    </Box>
  )
}

export default TourContent