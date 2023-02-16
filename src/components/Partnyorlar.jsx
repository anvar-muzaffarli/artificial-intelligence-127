import React from 'react'
import Partnyor from './Partnyor'

import { Swiper, SwiperSlide } from "swiper/react";

import partnyorShirket1 from '../assets/images/Group 400.png'
import partnyorShirket2 from '../assets/images/Group 401.png'
import partnyorShirket3 from '../assets/images/Group 402.png'
import partnyorShirket4 from '../assets/images/Group 403.png'

// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper';

const Partnyorlar = () => {
  return (
    <>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}

        breakpoints={{
            327: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}

        autoplay={
            {
                delay:2000
            }
        }
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <Partnyor shirketinLogosu={partnyorShirket1} /></SwiperSlide>
        <SwiperSlide> <Partnyor shirketinLogosu={partnyorShirket2} /></SwiperSlide>
        <SwiperSlide> <Partnyor shirketinLogosu={partnyorShirket3} /></SwiperSlide>
        <SwiperSlide> <Partnyor shirketinLogosu={partnyorShirket4} /></SwiperSlide>
 
       
       
      </Swiper>

  
   
   
    </>
  )
}

export default Partnyorlar