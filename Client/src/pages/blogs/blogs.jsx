import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import BlogSection from '../../components/cards/blogSection/blogSection.jsx';
import TourCardRow from '../../components/cards/tourCardRow/tourCardRow.jsx';
import Bestseller from '../../data/bestseller.js';
import Head from './head/head.jsx';
import BlogRow from './blogRow/blogRow.jsx';

const Blogs = () => {
  return (
    <Box>
      <Navbar active="Blogs" />
      <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
        <Grid item xs={12} md={10} xl={8}>
          <Head />
        </Grid>
        <Grid item xs={12} md={10} xl={8}>
          <BlogRow/>
        </Grid>
        <Grid item xs={12} md={10} xl={8}>
          <BlogSection/>
        </Grid>
        <Grid item xs={12} md={10} xl={8}>
          <TourCardRow data={Bestseller} titleHeading="WAYS TO EXPERIENCE INDIA" titleDesc="The amazing Experiences around India!" />
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  )
}

export default Blogs