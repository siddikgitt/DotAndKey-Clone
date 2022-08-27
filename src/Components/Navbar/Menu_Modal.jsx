import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Box,
  UnorderedList,
  ListItem,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Menu_Modal = ({ isOpen, onClose }) => {
  return (
    <>
      <Box>
        <Modal
          size={"7xl"}
          isCentered="true"
          onClose={onClose}
          isOpen={isOpen}
          scrollBehavior={"inside"}
        >
          <ModalOverlay />
          <ModalContent height="min-content">
            <ModalBody>
              <SimpleGrid columns={[1, 1, 2, 2]}>
                <Box width={"100%"}>
                  <UnorderedList>
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      WHAT'S NEW
                    </ListItem>
                    <Spacer />
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      Best SELLERS
                    </ListItem>
                    <br />
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      499 STORE
                    </ListItem>
                    <br />
                    <Flex>
                      <ListItem
                        color={"#3C3C3C"}
                        padding={"5px 0px"}
                        fontSize={"15px"}
                        as={"none"}
                      >
                        SHOP BY INGREDIENTS
                      </ListItem>
                      <Spacer />
                      <AddIcon w={"12px"} h={"12px"} />
                    </Flex>
                    <Flex>
                      <ListItem
                        color={"#3C3C3C"}
                        padding={"5px 0px"}
                        fontSize={"15px"}
                        as={"none"}
                      >
                        SHOP BY CONCERN
                      </ListItem>
                      <Spacer />
                      <AddIcon w={"12px"} h={"12px"} />
                    </Flex>
                    <Flex>
                      <ListItem
                        color={"#3C3C3C"}
                        padding={"5px 0px"}
                        fontSize={"15px"}
                        as={"none"}
                      >
                        <Link onClick={() => onClose(true)} to={"/shopall"}>
                        SHOP ALL PRODUCTS
                        </Link>
                      </ListItem>
                      <Spacer />
                      <AddIcon w={"12px"} h={"12px"} />
                    </Flex>
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      HAIR CARE
                    </ListItem>
                    <br />
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      BODY CARE
                    </ListItem>
                    <br />
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      IKWI NUTRITION
                    </ListItem>
                    <br />
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      DOWNLOAD THE APP
                    </ListItem>
                    <br />
                    <Flex>
                      <ListItem
                        color={"#3C3C3C"}
                        padding={"5px 0px"}
                        fontSize={"15px"}
                        as={"none"}
                      >
                        KNOW US BETTER
                      </ListItem>

                      <Spacer />
                      <AddIcon w={"12px"} h={"12px"} />
                    </Flex>
                    <Flex>
                      <ListItem
                        color={"#3C3C3C"}
                        padding={"5px 0px"}
                        fontSize={"15px"}
                        as={"none"}
                      >
                        PROFILE
                      </ListItem>
                      <Spacer />
                      <AddIcon w={"12px"} h={"12px"} />
                    </Flex>
                    <ListItem
                      color={"#3C3C3C"}
                      padding={"5px 0px"}
                      fontSize={"15px"}
                      as={"none"}
                    >
                      LOG IN
                    </ListItem>
                    <br />
                  </UnorderedList>
                </Box>
                <Box>
                  <Image
                    borderRadius={"20px"}
                    src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Cica_Sunscreen_Burger_Menu-02_2.png?v=1659613395"
                  />
                </Box>
              </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Menu_Modal;
