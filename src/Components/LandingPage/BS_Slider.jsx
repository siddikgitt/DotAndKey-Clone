import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";

import { Box, Button, Center, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

import slides from "../LandingPage/NA_Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { get_BestSeller, get_NewArrival } from "../API/api";

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

export function BS_Slider_Function({data}) {
    // console.log(value);
  
  return <BS_Slider data={data}/>;
}

export default class BS_Slider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: "slides.slides",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    const data = this.props.data;

    return (
      <div style={{ margin: "auto", justifyContent: "center", width: "90%" }}>
        <Slider
          style={{ paddingLeft: "20px" }}
          ref={(slider) => (this.slider = slider)}
          {...settings}
        >
          {data?.map((el) => (
              <Box padding={["10px","10px","40px","40px"]}>
                <Image src={el.image} />
                <Flex>
                  <span>&#11088;</span>
                  <Text>{el.rating}/5</Text>
                  <Text>({el.totalRatings})</Text>
                </Flex>
                <Text noOfLines={2} fontWeight={"semibold"}>{el.name}</Text>
                <Flex>
                <del>{el.mrp}</del>
                <Text color={"red"}>{el.ourPrice}</Text>
                </Flex>
                
                <Button bg={"#50504b"} color="white" width={"100%"}>ADD TO CART</Button>
              </Box>
          ))}
        </Slider>
      </div>
    );
  }
}
