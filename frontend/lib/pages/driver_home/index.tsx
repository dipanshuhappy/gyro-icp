

import { Box, Button, Center, HStack, Show, Switch, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import Header from "../../layout/Header"
import React, { useEffect, useState } from "react"

const DriverHomeScreen = () => {
    const [dutyState, setDutyState] = useState(false)

    return (
        <>
            <Header />
            <Box w="100%" h="100%">
                <Center>
                    <Box width={"30%"} backgroundColor={"purple.600"} padding={"4%"} borderRadius={"3xl"} boxShadow={"2xl"} marginTop="8" >


                        <Center>
                            <HStack>
                                {dutyState ? <Text>On Duty 🚘</Text> : <Text>Off Duty 💤</Text>}
                                <Switch size='lg' isChecked={dutyState} onChange={(e) => setDutyState(e.target.checked)} />

                            </HStack>
                        </Center>
                    </Box>
                </Center>
                {dutyState &&
                    <TableContainer>

                        <Table variant='striped' marginBottom={"8"}>
                            <TableCaption>Rides Request Incoming....</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Pick Up Location</Th>
                                    <Th>Price</Th>
                                    <Th >Destination</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                    <Td><Button bgColor={"green.800"}>Accept</Button></Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                    <Td><Button bgColor={"green.800"}>Accept</Button></Td>

                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                    <Td><Button bgColor={"green.800"}>Accept</Button></Td>

                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                    <Td><Button bgColor={"green.800"}>Accept</Button></Td>

                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                }
            </Box>
        </>
    )
}
export default DriverHomeScreen