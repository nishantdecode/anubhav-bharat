import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import SignUp from './signUp/signUp.jsx';

const Register = () => {
  return (
    <Box>
        <Navbar/>
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10} lg={10} xl={8}>
            <SignUp/>
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Register