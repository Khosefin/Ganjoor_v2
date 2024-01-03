"use client";

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
    <div className="swiper-container">
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-wrapper"
      >
        <SwiperSlide className="swiper-slide">
          <img src="/images/BGs/2.jpg" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/images/BGs/3.jpg" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/images/BGs/4.jpg" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/images/BGs/5.jpg" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/images/BGs/6.jpg" alt="shahname picture" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/images/BGs/7.jpg" alt="shahname picture" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
