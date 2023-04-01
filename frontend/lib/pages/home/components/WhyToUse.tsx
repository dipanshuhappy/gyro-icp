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
          boxShadow: "0px 1px 10px 2px #6C0BA9, 0 4px 4px 2px #6C0BA9",
        }}
      >
        {button}
      </Button>
    </Stack>
  );
};

export default function WhyToUse() {
  return (
    <Box p={10}>
      <VStack align="center" spacing="14">
        <VStack>
          <Heading
            // color="whiteAlpha.800"
            fontWeight="bold"
            lineHeight={2.2}
            textAlign="center"
            fontFamily="sans-serif"
            // textShadow="6px 3px 9px #6C0BA9"
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            Why to choose GYRO
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

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 14, md: 10 }}
          p={10}
        >
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title="How it Benefits Driver"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
            button="Read More"
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title="How it Benefits Passenger"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
            button="Read More"
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title="How to use it"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
            button="Read More"
          />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
