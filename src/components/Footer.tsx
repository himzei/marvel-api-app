import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTumblr, FaPinterestP } from "react-icons/fa";
import { SiSnapchat } from "react-icons/si";

export default function Footer() {
  return (
    <HStack
      w="full"
      bg="gray.800"
      h="300px"
      py="20"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid w="7xl" templateColumns={"0.5fr 1fr 1fr 1fr"} gap={10}>
        <GridItem w="90%">
          <Box>
            {" "}
            <Image src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" />
          </Box>
        </GridItem>
        <GridItem w="full">
          <HStack spacing={14}>
            <VStack
              color="gray.100"
              alignItems={"flex-start"}
              textTransform="uppercase"
              fontWeight={"600"}
            >
              <Text>About Marvel</Text>
              <Text>Help/Faqs</Text>
              <Text>Careers</Text>
              <Text>Internships</Text>
            </VStack>
            <VStack
              color="gray.400"
              alignItems={"flex-start"}
              textTransform="uppercase"
            >
              <Text>advertising</Text>
              <Text>Disney+</Text>
              <Text>Marvelhq.com</Text>
              <Text>Redeem digital</Text>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem w="full">
          <VStack spacing="8">
            <HStack spacing={8}>
              <Box w="16">
                <Image src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" />
              </Box>
              <VStack color="gray.400" alignItems={"flex-start"} spacing={0}>
                <Text
                  textTransform="uppercase"
                  color="gray.100"
                  fontWeight={600}
                >
                  marvel insider
                </Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
              </VStack>
            </HStack>
            <HStack spacing={8}>
              <Box w="16">
                <Image src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png" />
              </Box>
              <VStack color="gray.400" alignItems={"flex-start"} spacing={0}>
                <Text
                  textTransform="uppercase"
                  color="gray.100"
                  fontWeight={600}
                >
                  marvel unlimited
                </Text>
                <Text>Lorem ipsum dolor sit amet.</Text>
              </VStack>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-start"} spacing="6">
            <Text textTransform="uppercase" color="gray.100" fontWeight={600}>
              follow marvel
            </Text>
            <Grid
              w="75%"
              h="full"
              templateColumns={"repeat(4, 1fr)"}
              color="gray.500"
              rowGap={5}
            >
              <GridItem>
                <Box>
                  <AiFillFacebook size="20" />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiOutlineTwitter size="20" />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiFillInstagram size="20" />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaTumblr size="20" />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <AiFillYoutube size="20" />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <SiSnapchat size="20" />
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <FaPinterestP size="20" />
                </Box>
              </GridItem>
            </Grid>
          </VStack>
        </GridItem>
      </Grid>
    </HStack>
  );
}
