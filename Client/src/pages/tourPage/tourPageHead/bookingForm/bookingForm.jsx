import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, TextField, Typography, Modal } from '@mui/material'
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BeenhereIcon from '@mui/icons-material/Beenhere';

const style = {
  display:'flex',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{xs:'90%', sm:'70%', md:400},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingForm = () => {
  const [searchParams] = useSearchParams()

  let tourId = searchParams.get('tourId')

  const [selectedDate, setSelectedDate] = useState('2022-04-17')
  const [counter, setCounter] = useState(1);

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const addToBasket = () => {
    const basketTours = localStorage.getItem('basket');
    const basketObj = {
        tourId: tourId,
        dateTime: selectedDate,
        adults: counter
      }
    if(basketTours) {
      const basket = JSON.parse(basketTours);
      const tourAdded = basket.find(tour => tour.tourId === tourId);
      if(!tourAdded){
        basket.push(basketObj);
        const newBasketObj = JSON.stringify(basket);
        localStorage.setItem('basket', newBasketObj);
      }
    } else {
      const newBasketObj = JSON.stringify([basketObj]);
      localStorage.setItem('basket', newBasketObj);
    }
    setOpen(true);
  }
  const handleSearch = () => {
    navigate(`/?date=${selectedDate}`);
  };

  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', width:'100%', backgroundColor:'background.paper', boxShadow:{xs:0,sm:0,md:1,lg:1}, borderRadius:'16px', py:5}}>
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:{xs:'90%', sm:'70%', md:'90%'}, mb:5}}>
        <Typography sx={{display:{xs:'none', sm:'block', md:'block', lg:'block'},width:'100%', textAlign:'left', fontSize:'20px', fontWeight:'bold', px:4.5, mb:3}}>
          From ₹1550 <br/> per adult only
        </Typography>
        <Typography sx={{textAlign:{xs:'center', sm:'center', md:'left', lg:'left'}, fontSize:'24px', fontWeight:'medium', px:2}}>
          Select Date and Travellers
        </Typography>
        <Box sx={{display:'flex', width:'80%', height:'1px', backgroundColor:'#CDCDCD', border:'none', mb:2, mx:3}}/>
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:{xs:'90%', sm:'70%', md:'90%'}, px:2}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{display:'flex', width:'100%', px:2, mb:1}}>
            <CalendarMonthOutlinedIcon sx={{color:'primary.main', width:{sm:'24px', md:'32px'}, height:{sm:'24px', md:'32px'}}}/>
            <MobileDateTimePicker
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
          <Box sx={{display:'flex', width:'90%', height:'1px', backgroundColor:'#CDCDCD', border:'none', mb:2, mx:3}}/>
          <Box sx={{display:'flex', width:'100%',p:2, mb:5}}>
            <GroupsIcon sx={{color:'primary.main', width:{sm:'24px', md:'32px'}, height:{sm:'24px', md:'32px'}, mt:1, mr:2}}/>
            <ButtonGroup size="large">
              <Button disabled={counter >= 20} onClick={()=> {setCounter(counter+1)}}>+</Button>
              <Button disabled>{counter}</Button>
              <Button disabled={counter <= 1} onClick={() => {setCounter(counter-1)}}>-</Button>
            </ButtonGroup>
            <Typography sx={{fontSize:'18px',mx:2, mt:1}}>Adults</Typography>
          </Box>
          <Button onClick={() => addToBasket()} variant='outlined' sx={{color: 'primary', width:{xs:'100%', sm:'100%', md:'100%'},height:'56px', mb:1}}>
            <ShoppingBasketIcon sx={{mr:1}}/> Add to Basket
          </Button>
          <Button variant='register' sx={{color: 'primary', width:{xs:'100%', sm:'100%', md:'100%'},height:'56px', mb:2}} onClick={handleSearch}>
            <BeenhereIcon sx={{mr:1}}/> Reserve Now
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mr:2}}>
                Added to basket
              </Typography>
              <Button onClick={() => navigate('/basket')} variant='outlined' sx={{color: 'primary', width:{xs:'70%', sm:'60%', md:'50%'},height:'36px', p:2}}>
                <ShoppingBasketIcon sx={{mr:1}}/> View Basket
              </Button>
            </Box>
          </Modal>
        </LocalizationProvider>
      </Box>                    
    </Box>
  )
}

export default BookingForm