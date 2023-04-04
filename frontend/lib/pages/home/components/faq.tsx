import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  useBreakpointValue,
  VStack,
  Button,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import React from "react"

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  button: string;
}
const Feature = ({ title, text, icon, button }: FeatureProps) => {
  return (
    <Stack align="center">
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="gray.100"
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text
        color="gray.600"
        px={useBreakpointValue({ base: 4, md: 8 })}
        align="center"
      >
        {text}
      </Text>
      <Button
        bg="#51087E"
        rounded="full"
        border="2px"
        borderColor="#6C0BA9"
        color="white"
        alignContent="center"
        alignSelf="center"
        fontFamily="sans-serif"
        textShadow="1px 1px 1px black"
        _hover={{
          bg: "black",
          borderColor: "#6C0BA9",
          shadow: "2px 4px 5px #6C0BA9, 2px 4px 5px #6C0BA9",
        }}
      >
        {button}
      </Button>
    </Stack>
  );
};
export default function FAQ() {
  return (
    <Box p={10}>
      <VStack align="center" spacing="14">
        <VStack>
          <Heading
            color="#6C0BA9"
            fontWeight="extrabold"
            lineHeight={2.2}
            textAlign="center"
            fontFamily="sans-serif"
            // textShadow="6px 3px 9px #6C0BA9"
            fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
          >
            Faq
          </Heading>
          <Text
            color="gray"
            fontWeight="normal"
            lineHeight={2.2}
            align="center"
            fontFamily="sans-serif"
            // textShadow="6px 3px 9px #6C0BA9"
            fontSize={useBreakpointValue({ base: "md", md: "md" })}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </Text>
        </VStack>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#6C0BA9", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  How it Differ from Existing Sofware.
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#6C0BA9", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  Why people choose GYRO instead of existing software
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#6C0BA9", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  Section 3 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  );
}