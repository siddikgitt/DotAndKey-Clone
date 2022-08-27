import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const MyAccount = () => {
    const {handleLogout, cookies} = useContext(AppContext);

  return (
    <div>
        <Center>
            <Box>
                <Heading>My account</Heading>
                <br />
                <Center>
                <Link onClick={handleLogout} to="/">
                    <Text _hover={{textDecoration: "underline"}} fontSize={"18px"}>Log out</Text></Link>
                </Center>
            </Box>
        </Center>
        <Box padding={"10px 40px"}>
            <Flex justifyContent={"space-between"}>
                <Box>
                    <Heading>Order History</Heading>
                    {cookies.dat_userData ? "Hi" : "You haven't placed any orders yet."}
                </Box>
                <Box>
                    <Heading>Account details</Heading>
                    <br />
                    {console.log(cookies.dat_firstname)}
                    <Text>{cookies.dat_firstname} {cookies.dat_lastname}</Text>
                    <Text>India</Text>
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default MyAccount