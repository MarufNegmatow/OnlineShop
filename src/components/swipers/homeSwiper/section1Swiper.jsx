import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../../App.css"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import krossi4 from '../../../assets/krossi4.jpg'


 

const Section1Swiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://static.toiimg.com/thumb/msid-110938643,imgsize-27492,width-400,resizemode-4/110938643.jpg"
            alt="krossi1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hYyUyMGNvbXB1dGVyfGVufDB8fDB8fHww"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.create.vista.com/api/media/small/7106084/stock-photo-messy-books"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.rappler.com/tachyon/2024/02/samsung-s24-2-aa.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Section1Swiper