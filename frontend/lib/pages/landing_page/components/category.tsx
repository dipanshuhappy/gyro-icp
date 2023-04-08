import { Link, Box, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import React from "react"
import { useNavigate } from 'react-router-dom';


const ChooseOne = () => {
  const navigate = useNavigate();
  
  return (
  <SimpleGrid
    columns={{ base: 1, md: 2 }}
    spacing={{ base: 14, md: 10 }}
    p={{ base: "8", md: "48" }}
  >
    <Button
      border="1px"
      paddingX="12"
      paddingY={12}
      bgColor="#6C0BA9"
      color="white"
      borderRadius="3xl"
      onClick={() => {
        navigate('/driversignup')
      }}

      _hover={{
        transform: "scale(0.98)",
        borderColor: "#6C0BA9",
        bgColor: "white",
        color: "#6C0BA9",
        // filter: "blur(20px)",
        // shadow: "2px 4px 5px #6C0BA9, 2px 4px 5px #6C0BA9",
        boxShadow: "0px 1px 10px 2px #6C0BA9, 0 4px 4px 2px #6C0BA9",
      }}
    >
      <Link _hover={{ textDecoration: "none" }}>
        <Heading textAlign="center">Signup as a Driver</Heading>
      </Link>
    </Button>
    <Button
      border="2px"
      paddingX="12"
      paddingY={12}
      bgColor="#6C0BA9"
      color="white"
      borderRadius="3xl"
      onClick={() => {
        navigate('/ridersignup')
      }}
      _hover={{
        transform: "scale(0.98)",
        borderColor: "#6C0BA9",
        bgColor: "white",
        color: "#6C0BA9",
        // filter: "blur(20px)",
        // shadow: "2px 4px 5px #6C0BA9, 2px 4px 5px #6C0BA9",
        boxShadow: "0px 1px 10px 2px #6C0BA9, 0 4px 4px 2px #6C0BA9",
      }}
    >
      <Link _hover={{ textDecoration: "none" }}>
        <Heading textAlign="center">Signup as a Rider</Heading>
      </Link>
    </Button>
  </SimpleGrid>
  );
};
export default ChooseOne;