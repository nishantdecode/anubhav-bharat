import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const TourCarousel = ({carousel}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(carousel)
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {carousel.map((img)=>{
          return (
            <SwiperSlide key={img}>
              <img alt="" src={window.location.origin + img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {carousel.map((img)=>{
          return (
            <SwiperSlide key={img}>
              <img alt="" src={window.location.origin + img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default TourCarousel