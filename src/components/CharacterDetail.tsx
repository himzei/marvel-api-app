import { Box, Grid, GridItem, VStack, Text, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { characterDetail } from "../api";

interface IItem {
  name: string;
  resourceURI: string;
}
interface IImage {
  extension: string;
  path: string;
}
interface IComics {
  available: number;
  items: IItem[];
}

interface ISeries {
  available: number;
  items: IItem[];
}

interface ICharItems {
  id: number;
  modified: string;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: IImage;
  comics: IComics;
  series: ISeries;
  stories: ISeries;
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
      <Box pt={12}>
        <VStack
          w="full"
          h="700px"
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
                      {data?.data.results[0].name}
                    </Text>
                    <Text color="gray.200">
                      {data?.data.results[0].description}
                    </Text>
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
                        ResourceURI
                      </Text>
                      <Text color="rgba(255, 255, 255, 0.7)" fontSize={18}>
                        {data?.data.results[0].resourceURI}
                      </Text>
                    </VStack>
                  </VStack>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </VStack>

        <VStack
          w="full"
          h="auto"
          bg="gray.700"
          alignItems="center"
          py={16}
          spacing={16}
        >
          <VStack w="5xl" alignItems={"flex-start"}>
            <Text
              color="gray.100"
              textTransform={"uppercase"}
              fontSize={24}
              fontWeight="600"
              mb="4"
            >
              the Comics
            </Text>

            <VStack spacing={4}>
              {data?.data.results[0].comics.items.map((item, index) => (
                <VStack
                  justifyContent={"flex-start"}
                  alignItems="flex-start"
                  spacing={0}
                  w="full"
                  h="full"
                  key={index}
                >
                  <Text color="gray.100" fontWeight={600}>
                    {item.name}
                  </Text>
                  <Text color="gray.300">{item.resourceURI}</Text>
                </VStack>
              ))}
            </VStack>
          </VStack>

          <VStack w="5xl" alignItems={"flex-start"}>
            <Text
              color="gray.100"
              textTransform={"uppercase"}
              fontSize={24}
              fontWeight="600"
              mb="4"
            >
              the Series
            </Text>

            <VStack spacing={4}>
              {data?.data.results[0].series.items.map((item, index) => (
                <VStack
                  spacing={0}
                  alignItems="flex-start"
                  justifyContent={"flex-start"}
                  w="full"
                  h="full"
                  key={index}
                >
                  <Text color="gray.100" fontWeight={600}>
                    {item.name}
                  </Text>
                  <Text color="gray.300">{item.resourceURI}</Text>
                </VStack>
              ))}
            </VStack>
          </VStack>

          <VStack w="5xl" alignItems={"flex-start"}>
            <Text
              color="gray.100"
              textTransform={"uppercase"}
              fontSize={24}
              fontWeight="600"
              mb="4"
            >
              the Stories
            </Text>

            <VStack spacing={4}>
              {data?.data.results[0].stories.items.map((item, index) => (
                <VStack
                  justifyContent={"flex-start"}
                  alignItems="flex-start"
                  w="full"
                  h="full"
                  key={index}
                  spacing={0}
                >
                  <Text color="gray.100" fontWeight={600}>
                    {item.name}
                  </Text>
                  <Text color="gray.300">{item.resourceURI}</Text>
                </VStack>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
