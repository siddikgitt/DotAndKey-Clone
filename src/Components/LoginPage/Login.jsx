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

import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const context = useContext(AppContext);
  const {handleLogin, auth, cookies} = context;
  if(auth){
    return <Navigate to={"/account"}/>
  }
  return (
    <>
      <Center>
        <Box>
          <Heading marginTop={"50px"} textAlign={"center"} fontSize={"27px"}>
            Login
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
            <Text>EMAIL</Text>
            <Input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            marginTop={"10px"} w={"380px"} h="45px" />
            <Text marginTop={"15px"}>PASSWORD</Text>
            <Input 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type={"password"} marginTop={"10px"} w={"380px"} h="45px" />
            <br />
            <Button
              colorScheme="#3C3C3C"
              marginTop={"15px"}
              w={"380px"}
              h="45px"
              color={"white"}
              bg={"#3C3C3C"}
              onClick={() => handleLogin(email, pass)}
            >
              Sign In
            </Button>
          </Box>
          <Link to={"/register"}>
            <Text marginBottom={"50px"} fontSize={"18px"} marginTop={"50px"}>
              Don't have an account? Sign up here.
            </Text>
          </Link>
        </Box>
      </Center>
    </>
  );
};

export default Login;
