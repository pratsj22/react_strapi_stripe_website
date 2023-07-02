import React from 'react'
import { Navigation, Pagination,A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Slider.scss'
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination,A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            speed={1200}
            loop
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={
                {delay: 2500,}
              }
        >
            <SwiperSlide>
            <Link to="./products/1" >
                <img src="/img/img1.jpg" alt="" />
            </Link>
                </SwiperSlide>
            <SwiperSlide>
            <Link to="./products/4" >
                <img src="/img/img4.jpg" alt="" />
            </Link>
                </SwiperSlide>
            <SwiperSlide>
            <Link to="./products/2" >
                <img src="/img/img2.jpg" alt="" />
            </Link>
                </SwiperSlide>
            <SwiperSlide>
            <Link to="./products/5" >
                <img src="/img/img5.jpg" alt="" />
            </Link>
                </SwiperSlide>
        </Swiper>
    )
}

export default Slider