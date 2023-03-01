import React from "react";
import { Stack, Box, Container, TextField } from "@mui/material";
import { useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Autocomplete from '@mui/material/Autocomplete';

import { CustomBox, Title, SubTitle, HeroImage, InputBox, CustomButton } from './hero.js'
import heroImg from "../../images/Taj.jpeg";

const options = ['New Delhi', 'North Delhi', 'South Delhi'];


const Hero = () => {
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-07'));

return (
    <CustomBox>
        
        <Box sx={{flex: "1.75 1", flexDirection: 'column'}} >
            <Container>
                <Title variant='h1'>
                    Discover the diversity and richness of India: A world within a country.
                </Title>

                <SubTitle variant='h5'>
                    Life is short and the world is wide. So, better get started.  
                </SubTitle>
            </Container>

            <InputBox>
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

        <Box sx={{ flex:'1 0', justifyContent: 'flex-end', mr: 2}}>
            <HeroImage src={heroImg} alt="heroImg"/>
        </Box>
    </CustomBox>
  );
};

export default Hero;
