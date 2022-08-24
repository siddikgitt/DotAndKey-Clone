import React, { Component } from "react";
import { Center, Container, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import LovedBY_Slider from "./LovedBy_Slider";
import AutoPlayMethods from "./LovedBy_Slider";
import LovedBy_Slider from "./LovedBy_Slider";

const LovedBy = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontSize={["18px","18px","18px","26px"]}>Loved By</Text>
        </Center>
        <Center>
          <Text fontWeight="semibold" fontSize={["31px", "31px", "31px", "37px"]}>10 Lakh+ customers</Text>
        </Center>
      </Container>
      {/* <LovedBY_Slider/> */}
      <LovedBy_Slider/>
      
    </>
  );
};

export default LovedBy;
