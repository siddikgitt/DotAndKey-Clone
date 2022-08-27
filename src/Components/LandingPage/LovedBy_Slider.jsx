// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Center, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

import slides from "../LandingPage/LovedBy_Slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import "./styles.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";
// import { Image } from "@chakra-ui/react";

// export default LovedBY_Slider;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    >
      <ChevronRightIcon w={"40px"} h={"40px"} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

    return (
        <div
          className={className}
          style={{ ...style, display: "block", color: "black" }}
          onClick={onClick}
        >
          <ChevronLeftIcon w={"40px"} h={"40px"} />
        </div>
      );
}

export default class LovedBy_Slider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      arrow: false,
      className: "slides.slides",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{margin: "auto", justifyContent: "center", width: "90%"}}>
        <Box>
        <Slider style={{paddingLeft: "20px"}} ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <a href="#">
              <Image borderRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Sale_Banner_Desktop_28.jpg?v=1661145413" />
            </a>
          </div>
          <div>
            <a href="#">
              <Image borderRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5_Sale_Banner_Desktop_copy.jpg?v=1660886724" />
            </a>
          </div>
          <div>
            <a href="#">
              <Image borderRadius={"20px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_Sale_Banner_Desktop_copy.jpg?v=1660886724" />
            </a>
          </div>
        </Slider>
        </Box>
      </div>
    );
  }
}
