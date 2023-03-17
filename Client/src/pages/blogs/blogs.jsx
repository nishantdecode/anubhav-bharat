import React from 'react'
import { Grid, Box } from '@mui/material';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import BlogSection from '../../components/blogSection/blogSection.jsx';

const Blogs = () => {
  return (
    <Box>
        <Navbar active="Blogs" />
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
        <Grid item xs={12} md={10}>
            <BlogSection/>
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Blogs