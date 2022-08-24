import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Center, Square, Circle } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from "@chakra-ui/react";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const LP_Slider = () => {
  return (
    <div>
      {/* <Center color='white'> */}
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2750,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_5.jpg?v=1659687433" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_home_top_7ad6b900-1b7f-4dc5-93f5-a2ee54906b6d.jpg?v=1660218807" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_7f3df301-1d23-4327-800b-8b63bccfd0a6_1.jpg?v=1658910526" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/vit_c_desk_2.png?v=1660133127" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <Image borderTopRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_4_3babe833-d39a-41e1-820b-094106abf857.png?v=1658910529" />
          </a>
        </SwiperSlide>
      </Swiper>
      {/* </Center> */}
    </div>
  );
};

export default LP_Slider;
