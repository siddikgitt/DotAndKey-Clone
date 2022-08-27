import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box marginTop={"25px"} border={"1px solid black"}>
        <Flex justifyContent={"space-around"}>
          <Box marginTop={"50px"}>
            <Text as="b">GET TO KNOW US</Text>
            <UnorderedList marginTop="25px" spacing={4} styleType={"none"}>
              <ListItem>ABOUT US</ListItem>
              <ListItem>CONTACT US</ListItem>
              <ListItem>EARTHCARE</ListItem>
              <ListItem>AFFILIATE PROGRAM</ListItem>
              <ListItem> TERMS & CONDITION</ListItem>
              <ListItem>REFUND & CANCELLATION</ListItem>
              <ListItem>PRIVACY POLICY</ListItem>
              <ListItem>ORDER & SHIPPING</ListItem>
              <ListItem>PAYMENT TERMS</ListItem>
              <ListItem>TERMS OF SERVICE</ListItem>
              <ListItem>REFUND POLICY</ListItem>
            </UnorderedList>
          </Box>
          <Box marginTop={"50px"}>
            <Text as="b">ALSO AVAILABLE ON</Text>
            <UnorderedList marginTop="25px" spacing={4} styleType={"none"}>
              <ListItem>NYKAA</ListItem>
              <ListItem>AMAZON</ListItem>
              <ListItem>FLIPKART</ListItem>
              <ListItem>MYNTRA</ListItem>
            </UnorderedList>
          </Box>
          <Box marginTop={"50px"}>
            <Text as="b">STAY UPDATED</Text>
            <UnorderedList marginTop="25px" spacing={4} styleType={"none"}>
              <Flex alignItems={"center"}>
                <Input variant="flushed" placeholder="example@example.com" />
                <Button bg={"#3C3C3C"} color="white">SUBMIT</Button>
              </Flex>
              <Button color={"white"} bg={"#9d88ce"}>DOWNLOAD THE APP</Button>
              <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"18px"}>FOLLOW US</Text>
                <Image src="https://i.ibb.co/dtGHrQJ/facebook-app-symbol.png" />
                <Image src="https://i.ibb.co/8N3xng9/instagram.png" />
                <Image src="https://i.ibb.co/8d37qMs/youtube.png" />
              </Flex>
              <Text fontSize={"16px"}>© 2022 Dot & Key</Text>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
