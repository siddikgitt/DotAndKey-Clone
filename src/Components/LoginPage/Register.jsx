import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Register = () => {
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [pass, setpass] = useState("");
  const {handleCreateAccount,  auth} = useContext(AppContext);
  if(auth){
    return <Navigate to={"/account"}/>
  }
  return (
    <>
      <Center>
        <Box>
          <Heading marginTop={"50px"} textAlign={"center"} fontSize={"27px"}>
            Create Account
          </Heading>
          <br />
          <Button
            marginTop={"50px"}
            w={"380px"}
            h="45px"
            color={"white"}
            colorScheme="#4267b2"
            bg={"#4267b2"}
          >
            <Image src="https://i.ibb.co/TPDNNzL/facebook.png" />
            Facebook Login
          </Button>
          <br />
          <Button
            marginTop={"5px"}
            w={"380px"}
            h="45px"
            colorScheme="#dd4b39"
            color={"white"}
            bg={"#dd4b39"}
          >
            <Image src="https://i.ibb.co/6yv54Hv/google.png" />
            Google Login
          </Button>

          <Box marginTop={"35px"}>
            <Text>FIRST NAME</Text>
            <Input
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            marginTop={"10px"} w={"380px"} h="45px" />
            <Text marginTop={"15px"}>LAST NAME</Text>
            <Input 
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            marginTop={"10px"} w={"380px"} h="45px" />
            <Text marginTop={"15px"}>EMAIL</Text>
            <Input 
            value={email}
            onChange={(e) => setemail(e.target.value)}
            marginTop={"10px"} w={"380px"} h="45px" />
            <Text marginTop={"15px"}>PASSWORD</Text>
            <Input 
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            type={"password"} marginTop={"10px"} w={"380px"} h="45px" />
            <br />
            <Button
              marginBottom={"50px"}
              colorScheme="#3C3C3C"
              marginTop={"15px"}
              w={"380px"}
              h="45px"
              color={"white"}
              bg={"#3C3C3C"}
              onClick={() => handleCreateAccount(firstname, lastname, email, pass)}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Register;
