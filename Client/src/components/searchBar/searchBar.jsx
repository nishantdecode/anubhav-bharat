import React from 'react'
import { useState} from 'react';
import { Stack, Box, Paper, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Autocomplete from '@mui/material/Autocomplete';

import {InputBox, CustomButton } from './searchBar.js'
import Bg from "../../images/searchBg.jpg"

const options = ['New Delhi', 'North Delhi', 'South Delhi'];
const cOptions = ['Cultural Tourism', 'Heritage Tourism', 'Eco Tours', 'Food Tourism', 'Outdoor Activities', 'Adventure Tourism'];

const SearchBar = () => {
  const [value, setValue] = useState(options[0]);
  const [cvalue, setcValue] = useState(cOptions[0]);
  const [inputValue, setInputValue] = useState('');
  const [cinputValue, setcInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-07'));

  return (
        <Box sx={{display:'flex', width: '100%', height:'400px', justifyContent:'center', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:'16px'}}>
            <Paper sx={{p:2, borderRadius:'10px',boxShadow:1}}>
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
                    sx={{ width: '200px' }}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                />
                <Autocomplete
                    value={cvalue}
                    onChange={(event, newcValue) => {
                      setcValue(newcValue);
                    }}
                    inputValue={cinputValue}
                    onInputChange={(event, newcInputValue) => {
                      setcInputValue(newcInputValue);
                    }}
                    id="Category"
                    options={cOptions}
                    sx={{ width: '200px' }}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={4} sx={{ width: '200px'}}>
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
            </Paper>
        </Box>
  )
}

export default SearchBar