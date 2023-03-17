import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import BlogSection from '../../components/blogSection/blogSection.jsx';
import TourCardRow from '../../components/tourCardRow/tourCardRow.jsx';
import Bestseller from '../../data/bestseller.js';
import Testimonials from '../../components/testimonials/testimonials.jsx';
import Head from '../../components/head/head.jsx';

const Blogs = () => {
  return (
    <Box>
      <Navbar active="Blogs" />
      <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
      <Grid item xs={12} md={10}>
            <Head/>
          </Grid>
      <Grid item xs={12} md={10}>
            <Testimonials/>
          </Grid>
        <Grid item xs={12} md={10}>
          <BlogSection />
        </Grid>
        <Grid item xs={12} md={10}>
          <TourCardRow data={Bestseller} titleHeading="WAYS TO EXPERIENCE INDIA" titleDesc="The amazing Experiences around India!" />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  )
}

export default Blogs