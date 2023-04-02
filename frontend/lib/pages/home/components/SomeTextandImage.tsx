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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore.
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
              text="first here"
            />
            <Feature
              icon={<Icon as={BsHeartArrow} color="green.500" w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text="second here"
            />
            <Feature
              icon={<Icon as={BsHeartArrow} color="purple.500" w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text="third here"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src="/assets/internet-computer.jpg"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} marginTop="28">
        <Stack spacing={8}>
          <Heading fontSize="xxx-large">You're Now Decentralized</Heading>
          <Text color="gray.500" fontSize="lg">
            ​​Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
