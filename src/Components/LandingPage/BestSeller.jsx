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
import { BS_Slider_Function } from "./BS_Slider";

const BestSeller = () => {
  const [tabs, setTabs] = useState("skin");
  const [color, setColor] = useState();
  const [data, setdata] = useState([]);
  useEffect(() => {
    get_BestSeller(tabs).then((res) => setdata(res));
  }, [tabs]);
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontSize={["18px", "18px", "18px", "26px"]}>OUR</Text>
        </Center>
        <Center>
          <Text
            fontWeight="semibold"
            fontSize={["31px", "31px", "31px", "37px"]}
          >
            BEST SELLERS
          </Text>
        </Center>
      </Container>
      <Container marginTop={"15px"}>
        <Center>
          <HStack spacing="24px">
            <Box
              style={{ cursor: "pointer" }}
              color={tabs === "skin" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("skin")}
            >
              SKIN
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
              color={tabs === "bodycare" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("bodycare")}
            >
              BODYCARE
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
              color={tabs === "haircare" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("haircare")}
            >
              HAIRCARE
            </Box>
            <Box>|</Box>
            <Box
              style={{ cursor: "pointer" }}
              color={tabs === "nutrition" ? "#ff3c69" : "#50504b"}
              onClick={() => setTabs("nutrition")}
            >
              NUTRITION
            </Box>
          </HStack>
        </Center>
      </Container>
      <BS_Slider_Function data={data} />
    </>
  );
};

export default BestSeller;
