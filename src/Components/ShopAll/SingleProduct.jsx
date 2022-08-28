import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const SingleProduct = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(1);

  const {addToCart} = useContext(AppContext);
  
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
            <Heading>
              <Text fontSize={"27px"} style={{ textAlign: "center" }}>
                {data.name}
              </Text>
            </Heading>
            <Spacer />
            <Flex gap={5} marginTop={"50px"}>
              <Text fontSize={"26px"}>
                <del>{data.mrp}</del>
              </Text>
              <Text color={"red"} fontSize={"26px"}>
                {data.ourPrice}
              </Text>
            </Flex>
            <Text color={"#3C3C3C"}>Inclusive of All Taxes</Text>
            <Spacer />
            <Center>
              <Box w={"82px"} >
                <Flex alignItems={"center"}>
                  <Button
                    fontSize={"22px"}
                    onClick={() => {
                      if (qty > 1) setQty(qty - 1);
                    }}
                    h={"43px"}
                    border={"0px"}
                    bg={"white"}
                  >
                    -
                  </Button>
                  <Text fontSize={"22px"}>{qty}</Text>
                  <Button
                    h={"43px"}
                    border={"0px"}
                    bg={"white"}
                    fontSize={"22px"}
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </Button>
                </Flex>
              </Box>
            </Center>
            <Spacer />
            <Button
              onClick={() => addToCart(data.name, data.ourPrice,qty, data.image)}
              marginTop={"50px"}
              colorScheme={"#3C3C3C"}
              fontSize={"16px"}
              bg={"#3C3C3C"}
              color="white"
              w={"100%"}
            >
              ADD TO CART
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default SingleProduct;
