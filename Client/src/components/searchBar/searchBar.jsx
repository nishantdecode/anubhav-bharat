import React from 'react'
import { useContext, useState} from 'react';
import { Stack, Box, Paper, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from "react-router-dom";
import { ActivityContext } from "../../context/ActivityContext.js"

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Autocomplete from '@mui/material/Autocomplete';

import {InputBox, CustomButton } from './searchBar.js'
import Bg from "../../images/searchBg.jpg"

const locations = ['New Delhi', 'North Delhi', 'South Delhi'];
const cOptions = ['Cultural Tourism', 'Heritage Tourism', 'Eco Tours', 'Food Tourism', 'Outdoor Activities', 'Adventure Tourism'];

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(location.state ? location.state.destination : 'New Delhi');
  const [category, setCategory] = useState(location.state ? location.state.category : 'Cultural Tourism');
  const [inputValue, setInputValue] = useState('');
  const [cinputValue, setcInputValue] = useState('');
  const [date, setDate] = useState(dayjs('2022-04-07'));
  const [options, setOptions] = useState(location.state ? location.state.options : '');

  const { dispatch } = useContext(ActivityContext)

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, category, options } });
    navigate(`/activities/${category}`, { state: { destination, date, category, options } });
  };

  return (
        <Box sx={{display:'flex', width: '100%', height:'400px', justifyContent:'center', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:'16px'}}>
            <Paper sx={{p:2, borderRadius:'10px',boxShadow:1}}>
            <InputBox>
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
                    sx={{ width: '200px' }}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                />
                <Autocomplete
                    value={category}
                    onChange={(event, newcValue) => {
                      setCategory(newcValue);
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
            </Paper>
        </Box>
  )
}

export default SearchBar