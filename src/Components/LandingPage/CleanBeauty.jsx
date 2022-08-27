import React from "react";
import { Box, Center, Container, Image, Text } from "@chakra-ui/react";

const CleanBeauty = () => {
  return (
    <>
      <Container marginTop={"25px"}>
        <Center>
          <Text
            fontWeight="semibold"
            fontSize={["31px", "31px", "31px", "37px"]}
          >
            CLEAN BEAUTY
          </Text>
        </Center>
        <Center>
          <Text fontSize={["18px", "18px", "18px", "26px"]}>
            WITH UNCOMPROMISED EFFICACY
          </Text>
        </Center>
      </Container>

      <Box
        style={{ textAlign: "justify", textAlignLast: "center" }}
        paddingLeft={"5%"}
        paddingRight={"5%"}
      >
        <Text marginTop={"15px"} color={"#3C3C3C"} fontSize={"22px"}>
          At Dot & Key, we strive to find the missing{" "}
          <span style={{ fontWeight: "bold" }}>"dots"</span> in your skincare
          regime and are obsessed with providing solutions or{" "}
          <span style={{ fontWeight: "bold" }}>"keys"</span> to these.
        </Text>

        <Text
          marginTop={["20px", "20px", "40px", "40px"]}
          color={"#3C3C3C"}
          fontSize={"22px"}
        >
          Our revolutionary products are crafted with utmost care and love for
          you. By blending{" "}
          <span style={{ fontWeight: "bold" }}>luxurious botanicals</span> with{" "}
          <span style={{ fontWeight: "bold" }}>high performance actives,</span>
          we bring to you clean formulations that are absolutely safe,
          delightfully gentle and unquestionably effective.
        </Text>
      </Box>
    </>
  );
};

export default CleanBeauty;
