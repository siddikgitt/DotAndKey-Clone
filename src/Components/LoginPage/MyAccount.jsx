import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const MyAccount = () => {
  const { handleLogout, fName, lName, userData, email, token } =
    useContext(AppContext);

  return (
    <div>
      <Center>
        <Box>
          <Heading>My account</Heading>
          <br />
          <Center>
            <Link onClick={handleLogout} to="/">
              <Text _hover={{ textDecoration: "underline" }} fontSize={"18px"}>
                Log out
              </Text>
            </Link>
          </Center>
        </Box>
      </Center>
      <Box padding={"10px 40px"}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Heading>Order History</Heading>
            {"You haven't placed any orders yet."}
          </Box>
          <Box>
            <Heading>Account details</Heading>
            <br />
            <Text>
              {fName} {lName}
            </Text>
            <Text>India</Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default MyAccount;
