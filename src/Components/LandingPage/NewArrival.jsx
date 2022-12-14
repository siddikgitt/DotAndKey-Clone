import { Center, Container, Text } from '@chakra-ui/react'
import React from 'react'
import NA_Slider, { NA_Slider_Function } from './NA_Slider'

const NewArrival = () => {
  return (
    <>
      <Container marginTop={"25px"}>
      <Center>
          <Text fontSize={["18px","18px","18px","26px"]}>SHOP OUR</Text>
        </Center>
        <Center>
          <Text fontWeight="semibold" fontSize={["31px", "31px", "31px", "37px"]}>NEW ARRIVALS</Text>
        </Center>
      </Container>
      <NA_Slider_Function/>
    </>
  )
}

export default NewArrival