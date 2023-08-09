import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx';
import BasketItems from './basketItem.jsx/basketItems.jsx';

const Basket = () => {
  return (
    <Box>
      <Navbar/>
      <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
        <Grid item xs={12} md={10} lg={10} xl={8}>
          <BasketItems/>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  )
}

export default Basket