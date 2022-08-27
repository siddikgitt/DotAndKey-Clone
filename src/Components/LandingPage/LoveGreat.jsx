import { Center, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'

const LoveGreat = () => {
  return (
    <>
    <Container marginTop={"25px"}>
        <Center>
          <Text fontWeight="semibold"
            fontSize={["31px", "31px", "31px", "37px"]}>LOVE IS GREATER</Text>
        </Center>
        <Center>
          <Text
             fontSize={["18px", "18px", "18px", "26px"]}
          >
            WHEN SHARED
          </Text>
        </Center>
      </Container>
      <Image w={"100%"} h={265} src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-2_6_1.png?v=1656572658'/>
    </>
  )
}

export default LoveGreat