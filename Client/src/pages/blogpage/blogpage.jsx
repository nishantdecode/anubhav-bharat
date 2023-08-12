import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import Navbar from "../../components/navbar/navbar.jsx";
import Footer from '../../components/footer/footer.jsx';
import BlogCarousel from './blogCarousel/blogCarousel.jsx';
import Bestseller from '../../data/bestseller.js';
import TourCardRow from '../../components/cards/tourCardRow/tourCardRow.jsx';

import BlogCards from '../../data/blogCards.js';

const Blogpage = () => {
  const [searchParams] = useSearchParams()
  const blogInfo = (BlogCards.filter((blog) => blog.blogId === searchParams.get('blogId') ? blog : '' ))[0]
  return (
    <Box>
        <Navbar active="Blogs" />
        <Grid container spacing={10} justifyContent="center" alignItems="center" my={-4}>
          <Grid item xs={12} md={10} xl={8}>
            <BlogCarousel carousel={blogInfo.carousel}/>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', p:2}}>
              <Typography color="primary.main" textAlign="center" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
                DESCRIPTION
              </Typography>
              <Typography variant="h3" textAlign="center" color="text.primary"  paragraph>
                {blogInfo.heading}
              </Typography>
            </Box>
            <Box sx={{width:'100%', p:2}}>
              <Typography variant="body" textAlign="justify" color="text.primary" paragraph sx={{height:{xs:'70vh', sm:'60vh', md:'100%'}, overflow:'hidden'}}>
                {blogInfo.desc}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <Box sx={{height:{xs:'400px', sm:'400px', md:'400px'}, width:"100%", borderRadius:'16px', overflow:'hidden'}}>
              <iframe title="Tour Location Map" width="100%" height="400px" frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp&height=100%25&amp&hl=en&amp&q=Humayun's%20Tomb,%20monument,%20Delhi,%20India+(Anubhav%20Bharat)&amp&t=&amp&z=15&amp&ie=UTF8&amp&iwloc=B&amp&output=embed"></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} md={10} xl={8}>
            <TourCardRow data={Bestseller} titleHeading="RECOMMENDED TOURS" titleDesc="The amazing Experiences around India!" />
          </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default Blogpage 