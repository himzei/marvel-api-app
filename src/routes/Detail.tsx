import {
  Image,
  Text,
  VStack,
  Box,
  HStack,
  Grid,
  GridItem,
  Avatar,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { detail } from "../api";

export interface ICharactersItems {
  name: string;
  resourceURI: string;
}

export interface ICharacters {
  available: number;
  collectionURI: string;
  items: ICharactersItems[];
}

export interface IImage {
  extension: string;
  path: string;
}

export interface IUrls {
  type: string;
  path: string;
}

export interface IStoriesDetail {
  name: string;
  resourceURI: string;
  type: string;
}

export interface IStories {
  available: number;
  collectionURI: string;
  items: IStoriesDetail[];
}

export interface IResults {
  description: string;
  format: string;
  modified: string;
  title: string;
  stories: IStories;
  characters: ICharacters;
  creators: ICharacters;
  images: IImage[];
  events: ICharacters;
  thumbnail: IImage;
  urls: [];
}

export interface IDataResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IResults[];
}

export interface IDetail {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IDataResult;
}

export default function Detail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery<IDetail>(["Detail", id], detail);
  console.log(data, isLoading);

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
                    {data?.data.results[0].title}
                  </Text>
                  <Text color="gray.200">
                    {data?.data.results[0].description.substr(0, 400)}
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
                      Creator
                    </Text>
                    <VStack alignItems={"flex-start"}>
                      {data?.data.results[0].characters.items.map(
                        (item, index) => (
                          <HStack key={index}>
                            <Avatar w="8" h="8" name={item.name} />
                            <Text color="gray.200">{item.name}</Text>
                          </HStack>
                        )
                      )}
                    </VStack>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </VStack>
      <VStack w="full" h="auto" bg="gray.700" alignItems={"center"} py={16}>
        <VStack w="6xl" alignItems={"flex-start"}>
          <Text
            color="gray.100"
            textTransform={"uppercase"}
            fontSize={24}
            fontWeight="600"
            mb="4"
          >
            the Stories
          </Text>
          <VStack spacing={4} alignItems="flex-start">
            {data?.data.results[0].stories.items.map((item) => (
              <VStack alignItems={"flex-stat"} spacing={0}>
                <Text fontWeight={600} color="gray.100">
                  {item.name}
                </Text>
                <Text color="gray.300">{item.resourceURI}</Text>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
      <VStack w="full" h="auto" bg="gray.700" alignItems={"center"} py={16}>
        <VStack w="6xl" alignItems={"flex-start"}>
          <Text
            color="gray.100"
            textTransform={"uppercase"}
            fontSize={24}
            fontWeight="600"
            mb="4"
          >
            the Images
          </Text>
          <HStack spacing={4} alignItems="flex-start">
            {data?.data.results[0].images.map((item, index) => (
              <Box w={40} key={index}>
                {index > 5 ? null : (
                  <Image src={`${item.path}.${item.extension}`} />
                )}
              </Box>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
