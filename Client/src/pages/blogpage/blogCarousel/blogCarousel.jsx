import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const BlogCarousel = ({carousel}) => {
  return (
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{height:'400px', borderRadius:"16px"}}>
        {carousel.map((img)=>{
          return (
            <SwiperSlide style={{opacity:1, height:'400px'}} key={img}>
              <img height="400px" alt="" src={window.location.origin + img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
  )
}

export default BlogCarousel