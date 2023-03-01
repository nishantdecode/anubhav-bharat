import React from 'react'
import { Grid, Box, Paper } from '@mui/material';
import { styled } from "@mui/material";

import Navbar from "../../components/navbar/navbar.jsx";
import Hero from '../../components/hero/hero.jsx';

const home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Navbar/>
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10}>
            <Hero/>
          </Grid>
          <Grid item xs={12} md={10}>
            <Hero/>
          </Grid>
          <Grid item xs={12} md={10}>
            <Item>xs=12 md=10 lg=10</Item>
          </Grid>
        </Grid>
      </Box>
  )
}

export default home

