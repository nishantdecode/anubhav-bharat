import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { Box, TextField, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Bg from "../../images/searchBg.jpg"

const locations =[ 'New Delhi', 'North Delhi', 'South Delhi'];
const categoryOptions = ['Cultural Tourism', 'Heritage Tourism', 'Eco Tours', 'Food Tourism', 'Outdoor Activities', 'Adventure Tourism'];

const SearchBar = () => {
  const navigate = useNavigate();

  const params = useParams()
  const [searchParams] = useSearchParams()

  let destination = params.destination
  let category = params.category
  let date = searchParams.get('date')

  if(destination === "activities")
    destination = 'New Delhi'
  if(!category)
    category = 'Cultural Tourism'
  if(!date)
    date = '2022-04-17'

  const [selectedDate, setSelectedDate] = useState(date)
  const [selectedLocation, setSelectedLocation] = useState(destination)
  const [selectedCategory, setSelectedCategory] = useState(category)

  const handleSearch = () => {
    navigate(`/${selectedLocation}/${selectedCategory}/?date=${selectedDate}`);
  };

    return (
          <Box sx={{display:'flex', width: '100%', height:'400px', justifyContent:'center', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:{sm:'0px', md:'16px'}}}>
                <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'column', md:'row'}, width:{xs:'80%', sm:'70%', md:'auto'}, px:3, pt:3, backgroundColor:'background.default', borderRadius:'16px', boxShadow:1}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{display:'flex', mt:1.5, mb:{xs:1, sm:1, md:0},  width:{xs:'100%', sm:'100%', md:'180px'}}}>
                      <LocationOnIcon sx={{color:'primary.main', width:{sm:'24px', md:'32px'}, height:{sm:'24px', md:'32px'}}}/>
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
                    <Box sx={{display:'flex', mt:1.5, mb:{xs:1, sm:1, md:0},  width:{xs:'100%', sm:'100%', md:'220px'}}}>
                      <ExploreIcon sx={{color:'primary.main', width:{sm:'22px', md:'30px'}, height:{sm:'22px', md:'30px'}}}/>
                      <TextField
                        name="categories"
                        label="Categories"
                        select
                        SelectProps={{
                          multiple: false
                        }}
                        value={selectedCategory}
                        onChange={(evt) => {
                          setSelectedCategory(evt.target.value);
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
                        {categoryOptions.map((location) => {
                          return (
                            <MenuItem key={location} value={location}>
                              {location}
                            </MenuItem>
                          )
                        })}
                      </TextField>
                    </Box>
                    <Box sx={{display:'flex', width:{xs:'90%', sm:'90%', md:'1px'} , height:{xs:'1px', sm:'1px', md:'32px'}, backgroundColor:'#CDCDCD', border:'none', mt:{sm:0, md:1.5}, mb:{xs:2, sm:2, md:0}, mx:3}}/>
                    <Box sx={{display:'flex', mt:1.5, width:{xs:'100%', sm:'100%', md:'180px'}}}>
                      <CalendarMonthIcon sx={{color:'primary.main', width:{sm:'24px', md:'32px'}, height:{sm:'24px', md:'32px'}}}/>
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
    )
}

export default SearchBar