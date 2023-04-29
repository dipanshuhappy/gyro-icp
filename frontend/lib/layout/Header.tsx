/* eslint-disable jsx-a11y/anchor-is-valid */
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Center,
} from "@chakra-ui/react"
import { ConnectButton, ConnectDialog } from "@connect2ic/react"
import type { ReactNode } from "react"
import React from "react"
import GyroConnectButton from "../components/button/ConnectButton"
import GyroAvatar from "../components/avatar/GyroAvatar"

const Links = ["Home", "How  it  Works", "How  to  Use", "About  Us"]

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: "none",
      fontSize: "xl",
      textShadow: "2px 2px 2px #6C0BA9",
      // bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href="#"
  >
    {children}
  </Link>
)
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isConnectOpen,
    onOpen: onConnectOpen,
    onClose: onConnectClose,
  } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue("#6C0BA9", "#6C0BA9")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* <HStack spacing="96" alignItems="center"> */}
        <GyroAvatar />
        <HStack
          as="nav"
          spacing={8}
          fontWeight="bold"
          fontFamily="sans-serif"
          display={{ base: "none", md: "flex" }}
        >
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
        <HStack spacing={8}>
          <Link onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Link>
          <GyroConnectButton />
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
