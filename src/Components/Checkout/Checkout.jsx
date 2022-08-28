import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { AppContext } from "../Context/AppContext";
import { Link, useParams } from "react-router-dom";


const Checkout = () => {
  const { userData, handleLogout, fName, lName, email, token, orderProduct } = useContext(AppContext);
  const total = userData.reduce(
    (prevValue, el) => prevValue + Number(el.price),
    0
  );
  // prevValue + Number(el.ourPrice)
  console.log(userData);
  return (
    <>
      <Image src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-28/checkout%20top%20image_794110.jpeg" />
      <Box padding={"15px 50px"}>
        <Flex>
          <Box padding={"10px 25px"} w={"60%"} h="500px">
            <Text fontWeight={"bold"}>Contact information</Text>

            <Flex marginTop={"10px"} gap={"4"}>
              <Box>
                <WrapItem>
                  <Avatar src="https://bit.ly/tioluwani-kolawole" />
                </WrapItem>
              </Box>
              <Box>
                <Text>{fName}{" "}{lName}{" "}{email}</Text>
              </Box>
            </Flex>
            <Checkbox marginTop={"10px"} defaultChecked>
              Keep me up to date on news and exclusive offers
            </Checkbox>
            <Text marginTop={"15px"} marginBottom="10px" fontWeight={"bold"}>
              Shipping address
            </Text>
            <Flex gap={"2"}>
              <Input marginBottom={"10px"} placeholder="First name" />
              <Input marginBottom={"10px"} placeholder="Last name" />
            </Flex>
            <Input marginBottom={"10px"} placeholder="Address" />
            <Input marginBottom={"10px"} placeholder="Apartment" />
            <Flex>
              <Box>
                <Input marginBottom={"10px"} placeholder="City" />
              </Box>
              <Box>
                <Input marginBottom={"10px"} placeholder="State" />
              </Box>
              <Box>
                <Input marginBottom={"10px"} placeholder="Pin code" />
              </Box>
            </Flex>
            <InputGroup marginBottom={"10px"}>
              <InputLeftAddon children="+91" />
              <Input type="tel" placeholder="Phone" />
            </InputGroup>
            <Checkbox marginBottom={"10px"}>
              {" "}
              Get Order Updates On WhatsApp
            </Checkbox>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text color={"red"}>{"<"} Return to cart</Text>
              <Link to="/">
              <Button onClick={() => orderProduct(total)} color={"white"} bg={"#616160"}>
                Order
              </Button>
              </Link>
            </Flex>
          </Box>
          <Box padding={"15px 20px"} bg={"#fafafa"} h="500px" w={"40%"}>
            <Flex gap={1}>
              <Text>Pay now and get </Text>{" "}
              <Text color="red">3% instant discount.</Text>
            </Flex>
            <Box border={"1px solid black"} height={"56%"} overflowY={"scroll"}>
              {userData?.map((el) => (
                <Box padding={"5px 10px"}>
                  <Flex gap={2}>
                    <Box h={"100px"} w={"250px"}>
                      <Image h={"100px"} w={"100%"} src={el.image} />
                    </Box>
                    <Box>
                      <Text noOfLines={2}>{el.name}</Text>
                      <Text>Rs.{el.price}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Box>
            <Flex marginTop={"15px"} gap="4">
              <Input bg={"white"} placeholder="Gift card or Discount code" />
              <Button color={"white"} colorScheme="#c8c8c8" bg="#c8c8c8">
                APPLY
              </Button>
            </Flex>
            <Flex
              marginTop={"15px"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text>Subtotal</Text>
              <Text>₹{total}</Text>
            </Flex>
            {/* <Flex
              marginTop={"7px"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text>Shipping</Text>
              <Text>Calculated at next step</Text>
            </Flex> */}

            <Flex
              marginTop={"7px"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text>Total</Text>
              <Text> ₹{total}</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Checkout;
