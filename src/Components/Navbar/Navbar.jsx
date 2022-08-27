import React from "react";
import {
  Container,
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Show,
  Modal,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import NavbarTopSlider from "./NavbarTopSlider";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import Menu_Modal from "./Menu_Modal";
import { Link, useParams } from "react-router-dom";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // console.log(isOpen);
  return (
    <div>
      <Center bg="#50504b" color="white" height={["34px", "34px", "34px"]}>
        <NavbarTopSlider />
      </Center>
      <Box paddingLeft={["0px", "40px"]} paddingRight={["0px", "40px"]}>
        <Box bg="white" w="100%" p={4}>
          <Flex justify={"space-between"} align="center">
            <Box>
              {isOpen ? <CloseIcon onClick={onClose}/> : <HamburgerIcon onClick={onOpen} w={"28px"} h={"28px"} />}
            </Box>
            <Box>
              <Link to="/">
              <Image
                marginLeft={["0px", "0px", "120px", "120px"]}
                h={"41px"}
                w="125px"
                src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x@2x.jpg?v=1646547348"
              />
              </Link>
            </Box>
            <Box>
              {/* <SimpleGrid columns={4} spacing={["2","2", "6", "6"]} align="center"> */}
              <Flex align={"center"} gap="4">
                <SearchIcon w={"22px"} h={"22px"} />
                <Image w={"22px"} h={"22px"} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633" />
                <Image w={"22px"} h={"22px"} src="https://i.ibb.co/SVzyrgj/shopping-Bag.png" />

                <Link to="/login">
                <Image
                  w={["0px", "22px", "22px", "22px"]}
                  h={["0px", "22px", "22px", "22px"]}
                  src="https://i.ibb.co/Rh5GBRq/user.png"
                />
                </Link>
                {/* <Link to="/login">Go Back</Link> */}
                {/* <Image display={{ base: "none", sm: "block" }} w={"22px"} h={"22px"} src="https://i.ibb.co/Rh5GBRq/user.png" /> */}
              </Flex>
              {/* </SimpleGrid> */}
            </Box>
          </Flex>
        </Box>
      </Box>
      <Menu_Modal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
