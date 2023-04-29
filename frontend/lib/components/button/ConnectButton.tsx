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
} from "@connect2ic/react"
import React from "react"

function GyroConnectButton() {
  const {
    isOpen: isConnectOpen,
    onOpen: onConnectOpen,
    onClose: onConnectClose,
  } = useDisclosure()
  const { isConnected, principal, disconnect } = useConnect()
  return (
    <>
      {isConnected ? (
        <Menu>
          <MenuButton as={Button} rightIcon={<AiOutlineWallet />}>
            {String(principal).slice(0, 5)}...{String(principal).slice(5, 18)}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={disconnect}>Log out </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button onClick={onConnectOpen}>
          <ConnectToIcButton
            onConnect={() => {
              console.log("Connected")
              onConnectClose()
            }}
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
