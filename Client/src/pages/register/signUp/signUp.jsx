import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

import Welcome from "../../../images/indiaGate.jpeg"

const SignUp = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [selected, setSelected] = React.useState(1);

  const handleUser = () => {
    const userObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
    }
    const newUserObj = JSON.stringify(userObj);
    localStorage.setItem('user', newUserObj);
    window.location.href='https://anubhav-bharat.vercel.app/'
  };

  const handleSearch = () => {
  };

  const handleSelection = () => {
    if(selected)
        setSelected(0)
    else
        setSelected(1)
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={11} sm={9} md={6} lg={6} xl={6}>
        <Box sx={{display:{xs:'none', sm:'none', md:'flex'}, width: '100%', height:'600px', backgroundImage:`url(${Welcome})`, backgroundRepeat: "no-repeat", backgroundPosition: "50% 0%", backgroundSize:"cover", borderRadius:"16px"}}/>
      </Grid>
      <Grid item xs={11} sm={9} md={6} lg={6} xl={6}>
        {selected ? (
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'600px', backgroundColor:'white',p:2, boxShadow:1, borderRadius:'16px', gap:4}}>
          <Typography variant="h3" textAlign="center" fontWeight="bold">
            Create Your Account
          </Typography>
          <Box sx={{display:'flex', flexDirection:'column', mt:1, mb:{xs:1, sm:1, md:0},  width:{xs:'100%', sm:'100%', md:'90%', lg:'80%'}, px:2, gap:2}}>
            <TextField
              id="outlined-controlled"
              label="First Name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Last Name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Phone Number"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}} >
            <Button variant='register' sx={{color: 'primary', width:'45%' ,height:'45px', fontSize:'16px'}} onClick={handleUser}>
              Register
            </Button>
            <Button variant="text" onClick={handleSelection}>Already Have an account? LogIn</Button>
          </Box>
          <Typography textAlign="center" fontWeight="medium" sx={{fontSize:'12px', width:'60%'}}>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.</Typography>
        </Box>
        ) : (
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'600px', backgroundColor:'white',p:2, boxShadow:1, borderRadius:'16px', gap:4}}>
          <Typography variant="h3" textAlign="center" fontWeight="bold">
            Login to your Account
          </Typography>
          <Box sx={{display:'flex', flexDirection:'column', mt:1, mb:{xs:1, sm:1, md:0},  width:{xs:'100%', sm:'100%', md:'90%', lg:'80%'}, px:2, gap:2}}>
            <TextField
              id="outlined-controlled"
              label="Phone Number"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Enter OTP"
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value);
              }}
            />
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}} >
            <Button variant='register' sx={{color: 'primary', width:'45%' ,height:'45px', fontSize:'16px'}} onClick={handleSearch}>
              Login
            </Button>
            <Button variant="text" onClick={handleSelection}>Don't have an account? Register</Button>
          </Box>
          <Typography textAlign="center" fontWeight="medium" sx={{fontSize:'12px', width:'60%'}}>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.</Typography>
        </Box>
        )}
      </Grid>
    </Grid>
  )
}

export default SignUp