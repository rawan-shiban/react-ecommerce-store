import React from 'react'
import Product from './Product'
import './slideProduct.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function SlideProduct({ title, data }) {
   
    if (!data || !Array.isArray(data) || data.length === 0) {
        return (
            <div className="slide-products slide">
                <div className="container">
                    <div className="top-slide">
                        <h2>{title || 'Products'}</h2>
                        <p>No products available</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="slide-products slide">
            <div className="container">
                <div className="top-slide">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut!</p>
                </div>

                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={4}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Product item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SlideProduct  // ✅ بدون أي شيء إضافي