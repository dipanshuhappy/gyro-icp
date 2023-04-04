import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    VStack,
  } from '@chakra-ui/react';
  import React from "react";
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function RiderSignup() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
    <Box w="100%" h="100%" bgGradient="linear(to-l,  gray.700, #4F0079)">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to start your first ride ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            p={8}
            >
            <Stack spacing={8}>
              <HStack spacing={12}>
                <Box>
                  <FormControl id="firstName" isRequired>
                  <VStack spacing={2} align="left">
                    <FormLabel >First Name</FormLabel>
                    <Input type="text" placeholder="John" focusBorderColor='#ffff' />
                    </VStack>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                  <VStack spacing={2} align="left">
                    <FormLabel >Last Name</FormLabel>
                    <Input type="text" placeholder="Doe"/>
                    </VStack>
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="email" isRequired>
              <VStack spacing={2} align="left">
                <FormLabel >Email address</FormLabel>
                <Input type="email" />
                </VStack>
              </FormControl>

              <FormControl id="email" isRequired>
              <VStack spacing={2} align="left">
                <FormLabel >Email address</FormLabel>
                <Input type="email" />
                </VStack>
              </FormControl>

              <FormControl id="password" isRequired>
              <VStack spacing={2} align="left">
                <FormLabel >Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                </VStack>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
    );
  }