import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(location.state);
  }, []);

  return (
    <>
      <Box marginTop={"50px"}>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <Box padding={"10px 50px"}>
            <Image borderRadius={"25px"} w={"100%"} src={data.image} />
          </Box>
          <Box>
            <Heading><Text fontSize={"27px"} style={{textAlignLast: "center"}}>{data.name}</Text></Heading>
            <Spacer />
            <Flex gap={5} marginTop={"50px"}>
              <Text fontSize={"26px"}>
                <del>{data.mrp}</del>
              </Text>
              <Text color={"red"} fontSize={"26px"}>{data.ourPrice}</Text>
            </Flex>
            <Text color={"#3C3C3C"}>Inclusive of All Taxes</Text>
            <Spacer/>
            <Button marginTop={"50px"} colorScheme={"#3C3C3C"} fontSize={"16px"} bg={"#3C3C3C"} color="white" w={"100%"}>ADD TO CART</Button>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default SingleProduct;
