import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react"
import type { ReactElement } from "react";
import {
  //   IoAnalyticsSharp,
  //   IoLogoBitcoin,
  //   IoSearchSharp,
  BsHeartArrow,
} from "react-icons/bs";
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}
import internetComputer from "../../../../assets/internet-computer.jpg"
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction="row" align="center">
      <Flex
        w={8}
        h={8}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
export default function OnChain100() {
  return (
    <Container maxW="6xl" py={12} marginTop="10">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="28">
        <Stack spacing={8}>
          <Heading>100% On-Chain Ride sharing Software</Heading>
          <Text color="gray.500" fontSize="lg">
            Now you're on complete On-Chain, i mean you are completely decentralized.
           Oops even this front-end also hosted on blockchain not in any centralized providers.
           wan't to know how it's happening just check out this ICP(INTERNET COMPUTER PROTOCOL).
           Thanks to ICP for providing this features.
          </Text>
          <Text color="blue.400" fontWeight={600} fontSize="sm">
            Here Some Key Features:
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={BsHeartArrow} color="yellow.500" w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text="No need to pay, for using application"
            />
            <Feature
              icon={<Icon as={BsHeartArrow} color="green.500" w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text="No Comission"
            />
            <Feature
              icon={<Icon as={BsHeartArrow} color="purple.500" w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text="data security"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src={internetComputer}
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} marginTop="28">
        <Stack spacing={8}>
          <Heading fontSize="xxx-large">You're Now Decentralized</Heading>
          <Text color="gray.500" fontSize="lg">
          ICP has a protocol layer that enables shared computation.
           This layer allows developers to build and deploy 
           decentralized applications that can run directly on the ICP
            network, without the need for any intermediary layers.
             This enables a high degree of decentralization, 
             as the applications are run by the nodes on the ICP network,
              rather than by a centralized entity.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}