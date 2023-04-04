import React from 'react'
import { Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import ReviewCard from './reviewCard/reviewCard.jsx';




const Testimonials = ({data}) => {
    return (
      <>
        <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
            <Typography color="primary.main" textAlign="center" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
                TESTIMONIAL
            </Typography>
            <Typography variant="h3" textAlign="center" color="text.primary"  paragraph>
                Satisfied travellers around the world
            </Typography>
        </Box>
        <Box sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}}}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{paddingBottom: '36px', paddingTop:'36px', paddingLeft:'3%'}}
            >
                {data.map((card) => {
                    return (
                        <SwiperSlide key={String(card.rating)}>
                            <ReviewCard image={card.img} name={card.name} loc={card.loc} rating={card.rating} review={card.review}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>   
        <Box sx={{mb:5, display:{xs:'flex', sm:'flex', md:'none', lg:'none'}, flexWrap:'nowrap', overflow:"auto", scrollbarWidth:'0px', pl:1, pb:3, pt:3, pr:3}}>
            {data.map((card) => {
                return (
                    <Box sx={{m:2}} key={String(card.rating)}>
                        <ReviewCard image={card.img}  name={card.name} loc={card.loc} rating={card.rating} review={card.review}/>
                    </Box>
                        
                )
            })}
        </Box>
      </>
    )
}

export default Testimonials