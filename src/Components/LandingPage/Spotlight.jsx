import { Box, Center, Container, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Spotlight = () => {
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text fontSize={["18px", "18px", "18px", "26px"]}>IN THE</Text>
        </Center>
        <Center>
          <Text
            fontWeight="semibold"
            fontSize={["31px", "31px", "31px", "37px"]}
          >
            SPOTLIGHT
          </Text>
        </Center>
      </Container>
      <Box padding={5}>
        <SimpleGrid marginBottom={2} gap={5} columns={2}>
            <Image borderRadius={10} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_7.jpg?v=1660219323"/>
            <Image borderRadius={10} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/hyaluronic_1.png?v=1659682274"/>
        </SimpleGrid>
        <Image borderRadius={10} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_8.jpg?v=1660219412"/>
        </Box>
    </>
  );
};

export default Spotlight;
