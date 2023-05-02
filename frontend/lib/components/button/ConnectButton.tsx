import { AiOutlineWallet } from "react-icons/ai"
import {
  Button,
  Center,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import {
  ConnectButton as ConnectToIcButton,
  ConnectDialog,
  useConnect,
  useCanister,
} from "@connect2ic/react"
import React, { useCallback } from "react"
import { User } from ".dfx/local/canisters/gyro/gyro.did"
import { Router, useNavigate } from "react-router-dom"
import {  useUserStore } from "../../stores/users"
import { isObjectEmpty } from "../../../utils"

function GyroConnectButton() {
  const {
    isOpen: isConnectOpen,
    onOpen: onConnectOpen,
    onClose: onConnectClose,
  } = useDisclosure()
  const { isConnected, principal, disconnect } = useConnect()
  const [gyro,{loading,error}] = useCanister("gyro",{
    mode:"connected"
  })
  const setUser = useUserStore(state=>state.setUser)
  const onConnect =  async () => {
    console.log({principal},"this is the principal in connect button")
    const user: any  = await gyro.getUserDetailsFromPrincipalText(principal.toString());
    console.log({user},"this is the user")
    
    if(!user || user?.length==0){
        navigate("/ridersignup")
    }
    setUser(user[0] as User)
    navigate("/Home")
  }
  const users = useUserStore((state)=>state.user)
  const isUserLoggedIn = useUserStore(useCallback((state)=>!isObjectEmpty(state.user),[users]))
  console.log({users})
  console.log({isUserLoggedIn})

  const navigate = useNavigate() 
  return (
    <>
      {isConnected ? (
        isUserLoggedIn ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<AiOutlineWallet />}>
            {String(principal).slice(0, 5)}...{String(principal).slice(5, 18)}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={disconnect}>Log out </MenuItem>
          </MenuList>
        </Menu>) : (
         
           <Menu>
           <MenuButton as={Button} onClick={()=>{
          navigate("/ridersignup")
         }}>
             Sign Up to User
           </MenuButton>
           <MenuList>
             <MenuItem onClick={disconnect}>Log out </MenuItem>
           </MenuList>
         </Menu>
        )
      ) : (
        
        <Button onClick={onConnectOpen}>
          <ConnectToIcButton
            onConnect={onConnect}
          >

            Connect to Internet Computer
          </ConnectToIcButton>
        </Button>
      )}

      <Modal isOpen={isConnectOpen} onClose={onConnectClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Provider </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <ConnectDialog />
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onConnectClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GyroConnectButton
