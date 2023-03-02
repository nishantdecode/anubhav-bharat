import React from "react";
import { Stack, Grid, Box, Container, TextField } from "@mui/material";
import { useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Autocomplete from '@mui/material/Autocomplete';

import { Title, SubTitle, HeroImage, InputBox, CustomButton } from './hero.js'
import heroImg from "../../images/Taj2.jpeg";

const options = ['New Delhi', 'North Delhi', 'South Delhi'];


const Hero = () => {
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-07'));

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
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                              setInputValue(newInputValue);
                            }}
                            id="Location"
                            options={options}
                            sx={{ width: '240px', pr: 1, mb: 2}}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={4} sx={{ width: '240px', pr: 1, mb: 3 }}>
                            <DesktopDatePicker
                              label="Select Date"
                              value={selectedDate}
                              minDate={dayjs('202-01-01')}
                              onChange={(newSelectedDate) => {
                                setSelectedDate(newSelectedDate);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                            </Stack>
                        </LocalizationProvider>
                          
                        <CustomButton variant="register" >
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
