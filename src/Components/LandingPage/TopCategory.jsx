import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { get_BestSeller } from "../API/api";
import { TP_Slider_Function } from "./TP_Slider";

const TopCategory = () => {
  const [tabs, setTabs] = useState("bodycare");
  const [color, setColor] = useState();
  const [data, setdata] = useState([]);
  useEffect(() => {
    get_BestSeller(tabs).then((res) => setdata(res));
  }, [tabs]);
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontSize={["18px", "18px", "18px", "26px"]}>SHOP OUR</Text>
        </Center>
        <Center>
          <Text
            fontWeight="semibold"
            fontSize={["31px", "31px", "31px", "37px"]}
          >
            TOP CATEGORIES
          </Text>
        </Center>
      </Container>
      <Box marginTop={"15px"}>
        <Center>
          <HStack spacing="24px">
            <Box
              style={{ cursor: "pointer" }}
              color={tabs === "bodycare" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("bodycare")}              
            >
              FACE CREAMS
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
              color={tabs === "skin" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("skin")}
            >
              FACE SERUMS
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
              color={tabs === "nutrition" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("nutrition")}
            >
              FACE WASHES
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}              
              color={tabs === "haircare" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("haircare")}
            >
              FACE MASKS
            </Box>
          </HStack>
        </Center>
      </Box>
      <TP_Slider_Function data={data}/>
    </>
  );
};

export default TopCategory;
