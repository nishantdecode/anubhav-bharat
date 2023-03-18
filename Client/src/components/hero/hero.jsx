import React from "react";
import { Stack, Grid, Box, Container, TextField } from "@mui/material";
import { useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Autocomplete from '@mui/material/Autocomplete';

import { Title, SubTitle, HeroImage, InputBox, CustomButton } from './hero.js'
import heroImg from "../../images/Taj2.jpeg";

const locations = ['New Delhi', 'North Delhi', 'South Delhi'];


const Hero = () => {
    const [destination, setDestination] = useState(locations[0]);
    const [category, setCategory] = useState("Cultural Tourism");
    const [inputValue, setInputValue] = useState('');
    const [date, setDate] = useState(dayjs('2022-04-07'));
    const [options, setOptions] = useState({
        time: "",
        language: "English",
        price: 1000,
    });

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/activities", { state: { destination, date, category, options } });
    };

return (
    <Grid container spacing={10} justifyContent="center" alignItems="center" >
          <Grid item xs={12} md={7} lg={8}>
                <Box sx={{display: "flex", flexDirection: 'column'}} >
                    <Box>
                        <Container>
                            <Title variant='h1'>
                                Discover the diversity and richness of India: A world within a country.
                            </Title>

                            <SubTitle variant='h5'>
                                Life is short and the world is wide. So, better get started.  
                            </SubTitle>
                        </Container>
                    </Box>

                    <InputBox sx={{}}>
                        <Autocomplete
                            value={destination}
                            onChange={(event, newValue) => {
                              setDestination(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                              setInputValue(newInputValue);
                            }}
                            id="Location"
                            options={locations}
                            sx={{ width: '240px', pr: 1, mb: 2}}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={4} sx={{ width: '240px', pr: 1, mb: 3 }}>
                            <DesktopDatePicker
                              label="Select Date"
                              value={date}
                              minDate={dayjs('202-01-01')}
                              onChange={(newSelectedDate) => {
                                setDate(newSelectedDate);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                            </Stack>
                        </LocalizationProvider>
                          
                        <CustomButton variant="register" onClick={handleSearch} >
                            <SearchIcon />
                        </CustomButton>
                    </InputBox> 
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
