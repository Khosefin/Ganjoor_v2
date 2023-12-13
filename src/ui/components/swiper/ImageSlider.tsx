"use client";

import React, { HtmlHTMLAttributes, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/globals.css";
import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="sliderC">
          <img src="/a.png" alt="shahname picture" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
