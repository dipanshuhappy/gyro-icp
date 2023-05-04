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
  Center,
} from '@chakra-ui/react';
import React from "react";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { User, Status, _SERVICE } from '.dfx/local/canisters/gyro/gyro.did';
import GyroConnectButton from '../../../components/button/ConnectButton';
import { useCanister, useClient, useConnect } from '@connect2ic/react';
import { toast } from 'react-toastify';
import Header from '../../../layout/Header';
import { useNavigate } from 'react-router-dom';


export default function RiderSignup() {
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState<User>({
    email: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    status: { 'User': null } as Status
  });
  const { isConnected, principal } = useConnect()
  console.log({ principal })
  const [gyro, { error, loading, canisterDefinition }] = useCanister("gyro", {
    mode: "anonymous"
  })

  const navigate = useNavigate()
  return (
    <>
      <Header />
      {
        isConnected ?
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
                            <Input
                              value={user.firstName}
                              onChange={(e) => setUser({
                                ...user,
                                firstName: e.target.value
                              })}
                              type="text" placeholder="John" focusBorderColor='#ffff' />
                          </VStack>
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName">
                          <VStack spacing={2} align="left">
                            <FormLabel >Last Name</FormLabel>
                            <Input
                              value={user.lastName}
                              onChange={(e) => setUser({
                                ...user,
                                lastName: e.target.value
                              })}
                              type="text" placeholder="Doe" />
                          </VStack>
                        </FormControl>
                      </Box>
                    </HStack>

                    <FormControl id="number" isRequired>
                      <VStack spacing={2} align="left">
                        <FormLabel >Mobile Number</FormLabel>
                        <Input value={user.mobileNumber}
                          onChange={(e) => setUser({
                            ...user,
                            mobileNumber: e.target.value
                          })} type="number" />
                      </VStack>
                    </FormControl>

                    <FormControl id="email" isRequired>
                      <VStack spacing={2} align="left">
                        <FormLabel >Email address</FormLabel>
                        <Input
                          value={user.email}
                          onChange={(e) => setUser({
                            ...user,
                            email: e.target.value
                          })} type="email" />
                      </VStack>
                    </FormControl>



                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={'whiteAlpha.700'}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}
                        isLoading={loading}
                        onClick={async () => {

                          await gyro.registerUser(user, principal).then(() => {
                            toast("User Registered !!")
                            navigate("/Home")
                          }).catch((reason) => {
                            console.log({ reason })
                            console.error(reason);

                            toast("An Error Happended !!", { type: "error" })
                          })
                        }}
                      >
                        Sign up

                      </Button>
                    </Stack>
                    {/* <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <GyroConnectButton/>
                </Text>
              </Stack> */}
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Box> :
          <Center width={"100%"} height={"100vh"}>
            <GyroConnectButton />
          </Center>}
    </>
  );
}