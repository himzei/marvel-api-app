import {
  Box,
  Grid,
  GridItem,
  VStack,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { characterDetail } from "../api";

interface IImage {
  extension: string;
  path: string;
}

interface ICharItems {
  id: number;
  modified: string;
  name: string;
  thumbnail: IImage;
}
interface ICharResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICharItems[];
}

interface ICharacter {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ICharResult;
}

export default function CharacterDetail() {
  const { id } = useParams();
  const { data } = useQuery<ICharacter>([id], characterDetail);
  console.log(data);
  return (
    <>
      <VStack
        w="full"
        h="630px"
        backgroundImage={`url(${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition={"center"}
        backdropBlur="50px"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          bg="rgba(0, 0, 0, 0.85)"
          display={"flex"}
          justifyContent="center"
          py={10}
        >
          <Box w="6xl" h="full">
            <Grid templateColumns={"350px 1fr"} gap={12}>
              <GridItem>
                <Box w="full" h="450px">
                  <Image
                    zIndex={2}
                    src={`${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension}`}
                  />
                </Box>
              </GridItem>
              <GridItem>
                <VStack
                  h="450px"
                  alignItems={"flex-start"}
                  justifyContent="flex-start"
                  spacing={8}
                >
                  <Text
                    zIndex={2}
                    color="gray.100"
                    fontWeight={600}
                    fontSize="2xl"
                  >
                    hello
                  </Text>
                  <Text color="gray.200">hello</Text>
                  <VStack w="full" alignItems={"flex-start"} spacing={0}>
                    <Text color="gray.100" fontWeight={600} fontSize="xl">
                      Published
                    </Text>
                    <Text color="rgba(255, 255, 255, 0.7)" fontSize={18}>
                      {data?.data.results[0].modified.substr(0, 10)}
                    </Text>
                  </VStack>
                  <VStack w="full" alignItems={"flex-start"} spacing={0}>
                    <Text color="gray.200" fontWeight={600} fontSize="xl">
                      Creator
                    </Text>
                    <VStack alignItems={"flex-start"}>hello</VStack>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </VStack>

      <VStack w="full" h="auto" bg="gray.700" alignItems="center" py={16}>
        <VStack w="6xl" alignItems={"flex-start"}>
          <Text
            color="gray.100"
            textTransform={"uppercase"}
            fontSize={24}
            fontWeight="600"
            mb="4"
          >
            the Characters
          </Text>

          <HStack spacing={4} h="200px">
            {data?.data.results.map((item, index) => (
              <VStack
                justifyContent={"flex-start"}
                w="full"
                h="full"
                key={index}
              >
                <Box w="24" h="24" overflow={"hidden"} rounded="full">
                  <Image
                    w="24"
                    h="24"
                    objectFit={"cover"}
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                </Box>
                <Text w="24" color="gray.100" textAlign={"center"}>
                  {item.name}
                </Text>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
