import React from 'react'
import Title from '../title/title.jsx'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import TourCard from './tourCard/tourCard.jsx'

import 'swiper/css';
import 'swiper/css/navigation';

const TourCardRow = ({data, titleHeading, titleDesc}) => {
    return (
        <>
            <Title heading={titleHeading} desc={titleDesc} />
            <Box sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}}}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={4}
                  navigation
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  style={{paddingBottom: '36px'}}
                >
                    {data.map((card) => {
                        return (
                            <SwiperSlide key={card.price}>
                                <TourCard image={card.img} heading={card.Heading} subHeading={card.SubHeading} rating={card.rating} price={card.price}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>
            <Box sx={{display:{xs:'flex', sm:'flex', md:'none', lg:'none'}, flexWrap:'nowrap', overflow:"auto", scrollbarWidth:'0px', pl:1, pb:3, pt:3, pr:3}}>
                {data.map((card) => {
                    return (
                        <Box key={card.price} sx={{m:2}}>
                            <TourCard image={card.img} heading={card.Heading} subHeading={card.SubHeading} rating={card.rating} price={card.price}/>
                        </Box>  
                    )
                })}
            </Box>
        </>
    )
}
  
export default TourCardRow