//اولا نزلنا المكتبة سويبر لريئاكت 
//ثانيا ستوردناها

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function HeroSlider() {
  return (<>
    <div className="hero">
        <div className="container">
      <Swiper  
      loop={true}   autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={true} modules={[Pagination , Autoplay]} className="mySwiper">
        <SwiperSlide className='swiper-slider'>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft xbox <br /> 360 Controller</h3>
                <p>windows xp/10/7/8 Tv Box</p>
                <Link to="/" className="btn"> Shop Now </Link>
            </div>
            <img src="/src/img/banner_Hero1.jpg" alt="slide-hero-1" />
        </SwiperSlide>
        
        <SwiperSlide className='swiper-slider'>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft xbox <br /> 360 Controller</h3>
                <p>windows xp/10/7/8 Tv Box</p>
                <Link to="/" className="btn"> Shop Now </Link>
            </div>
            <img src="/src/img/banner_Hero2.jpg" alt="slide-hero-2" />
        </SwiperSlide>

        <SwiperSlide className='swiper-slider'>
            <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft xbox <br /> 360 Controller</h3>
                <p>windows xp/10/7/8 Tv Box</p>
                <Link to="/" className="btn"> Shop Now </Link>
            </div>
            <img src="/src/img/banner_Hero3.jpg" alt="slide-hero-3" />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
      </>
  )
}

export default HeroSlider