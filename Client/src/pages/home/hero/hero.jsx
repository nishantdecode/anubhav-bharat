import React, { useState } from "react";
import { Grid, Box, Container, TextField, MenuItem, Button } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Title, SubTitle, HeroImage } from './hero.js'

import heroImg from "../../../images/Taj2.jpeg";

const locations =[ 'New Delhi', 'North Delhi', 'South Delhi'];

const Hero = () => {
    const [selectedDate, setSelectedDate] = useState('2022-04-17')
    const [selectedLocation, setSelectedLocation] = useState('New Delhi')

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/${selectedLocation}/?date=${selectedDate}`);
    };

return (
    <Grid container spacing={10} justifyContent="center" alignItems="center" >
      <Grid item xs={12} md={7} lg={8}>
        <Box sx={{display: "flex", flexDirection: 'column', alignItems:{xs:'center', sm:'center', md:'flex-start'}}} >
          <Box sx={{width:{xs:'90%', sm:'70%', md:'100%'}}}>
            <Container>
              <Title variant='h1'>
                Discover the diversity and richness of India: A world within a country.
              </Title>
              <SubTitle variant='h5'>
                Life is short and the world is wide. So, better get started.  
              </SubTitle>
            </Container>
          </Box>
          <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'column', md:'row'}, width:{xs:'90%', sm:'70%', md:'auto'}, px:2, pt:3, ml:{sm:0, md:2}, backgroundColor:'background.default', borderRadius:'16px', boxShadow:1}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{display:'flex', mt:1, mb:{xs:1, sm:1, md:0},  width:{xs:'100%', sm:'100%', md:'180px'}}}>
                <LocationOnOutlinedIcon sx={{color:'primary.main', width:{sm:'24px', md:'32px'}, height:{sm:'24px', md:'32px'}}}/>
                <TextField
                  name="location"
                  label="Location"
                  select
                  SelectProps={{
                    multiple: false
                  }}
                  value={selectedLocation}
                  onChange={(evt) => {
                    setSelectedLocation(evt.target.value);
                  }}
                  sx={{
                    width:'100%',
                    variant: 'outlined',
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "none"
                      }
                    }
                  }}
                >
                  {locations.map((location) => {
                    return (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    )
                  })}
                </TextField>
              </Box>
              <Box sx={{display:'flex', width:{xs:'90%', sm:'90%', md:'1px'} , height:{xs:'1px', sm:'1px', md:'32px'}, backgroundColor:'#CDCDCD', border:'none', mt:{sm:0, md:1.5}, mb:{xs:2, sm:2, md:0}, mx:3}}/>
              <Box sx={{display:'flex', mt:1, width:{xs:'100%', sm:'100%', md:'180px'}}}>
                <CalendarMonthOutlinedIcon sx={{color:'primary.main', width:{sm:'24px', md:'32px'}, height:{sm:'24px', md:'32px'}}}/>
                <MobileDatePicker
                  name="date"
                  label="Date"
                  value={selectedDate}
                  onChange={newValue => {
                    setSelectedDate(newValue)
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        variant: 'outlined',
                        width:'100%',
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "none"
                          }
                        }
                      }}
                    />
                  )}
                />
              </Box>
              <Button variant='register' sx={{color: 'primary', width:{xs:'100%', sm:'100%', md:'56px'},height:'56px', mb:3}} onClick={handleSearch}>
                <SearchIcon />
              </Button>
            </LocalizationProvider>
          </Box>                    
        </Box>
      </Grid>
      <Grid item md={5} lg={4} sx={{display:{ xs:'none', md:'flex', lg:'flex' }}}>
        <Box sx={{display:'flex', mr: 2}}>
          <HeroImage src={heroImg} alt="heroImg"/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;