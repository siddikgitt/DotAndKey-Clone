import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Center, Square, Circle } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const NavbarTopSlider = () => {
  return (
    <>
      {/* <Center color='white'> */}
        <Swiper
        color='white'
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          style={{textAlign: "center"}}
        >
          <SwiperSlide>3% off on prepaid orders+ 10% cashback</SwiperSlide>
          <SwiperSlide>FLASH SALE: serums & masks at Flat 499</SwiperSlide>
          <SwiperSlide style={{color: "white"}}>Upto 20% Off sitewide</SwiperSlide>
        </Swiper>
      {/* </Center> */}
    </>
  );
};

export default NavbarTopSlider;
