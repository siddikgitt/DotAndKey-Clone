import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { Component, useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import { Box, Button, Center, Flex, Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import slides from "../LandingPage/NA_Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { get_BestSeller, get_NewArrival } from "../API/api";
import { AppContext } from "../Context/AppContext";
import Bag_Drawer from "../Navbar/Bag_Drawer";

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

export function TP_Slider_Function({data}) {
    // console.log(value);
    const navigate = useNavigate();
    const handleClick = (value) => {
      navigate("/singleproduct", { state: value });
    };
  const {addToCart} = useContext(AppContext);
  const drawerBag = useDisclosure();
  return <TP_Slider drawerBag={drawerBag} addToCart={addToCart} handleClick={handleClick} data={data}/>;
}

export default class TP_Slider extends Component {
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

    const drawerBag = this.props.drawerBag
    const addToCart = this.props.addToCart
    const handleClick = this.props.handleClick
    const data = this.props.data;

    return (
      <div style={{ margin: "auto", justifyContent: "center", width: "90%" }}>
        <Slider
          style={{ paddingLeft: "20px" }}
          ref={(slider) => (this.slider = slider)}
          {...settings}
        >
          {data?.map((el) => (
              <Box padding={"40px"}>
                <Image onClick={() => handleClick(el)} src={el.image} />
                <Flex>
                  <span>&#11088;</span>
                  <Text>{el.rating}/5</Text>
                  <Text>({el.totalRatings})</Text>
                </Flex>
                <Text noOfLines={2} fontWeight={"semibold"}>{el.name}</Text>
                <Flex>
                <del>Rs.{el.mrp}</del>
                <Text color={"red"}>Rs.{el.ourPrice}</Text>
                </Flex>
                
                <Button 
                onClick={() => {
                  addToCart(el.name, el.ourPrice,1, el.image);
                  drawerBag.onOpen()
                }}
                bg={"#50504b"} color="white" width={"100%"}>ADD TO CART</Button>
              </Box>
          ))}
        </Slider>
      <Bag_Drawer onClose={drawerBag.onClose} isOpen={drawerBag.isOpen}/>

      </div>
    );
  }
}
