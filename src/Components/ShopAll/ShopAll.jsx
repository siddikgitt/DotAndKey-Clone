import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const ShopAll = () => {
  const [data, setData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dak-db.herokuapp.com/allProduct`).then((res) => {
      setData(res.data);
    });
  }, []);

  const handleClick = (value) => {
    navigate("/singleproduct", { state: value });
  };

  return (
    <div>
      <Box>
        <Image
          borderRadius={"15px"}
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/green_desk_50d0a315-fd1c-45c7-92bf-a7c45753d5b9.webp?v=1660315290"
        />
      </Box>
      <Center paddingTop={"50px"}>
        <Heading fontSize={"45px"} color="#3C3C3C">
          SHOP ALL
        </Heading>
      </Center>
      <Box padding={"50px"}>
        <SimpleGrid gap={20} columns={[1, 2, 4, 4]}>
          {data?.map((el) => (
            <Box onClick={() => handleClick(el)}>
              <Image src={el.image} />
              <Text noOfLines={3}>{el.name}</Text>
              <Center>
                <Flex gap={2}>
                  <Text>
                    <del>{el.mrp}</del>
                  </Text>
                  <Text color={"red"}>{el.ourPrice}</Text>
                </Flex>
              </Center>
              <Button
                colorScheme={"#3C3C3C"}
                borderRadius={"0px"}
                w={"100%"}
                bg={"#3C3C3C"}
                color="white"
              >
                ADD TO CART
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default ShopAll;
