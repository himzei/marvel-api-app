import { Image, Text, VStack, Box, HStack } from "@chakra-ui/react";
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

export interface IResults {
  description: string;
  format: string;
  modified: string;
  title: string;
  characters: ICharacters[];
  creators: ICharacters[];
  images: IImage;
  events: ICharacters[];
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
        h="600px"
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
        >
          <HStack w="7xl" h="full" spacing={20}>
            <Box w="300px" h="450px">
              <Image
                zIndex={2}
                src={`${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension}`}
              />
            </Box>
            <VStack
              h="450px"
              alignItems={"flex-start"}
              justifyContent="flex-start"
              spacing={8}
            >
              <Text zIndex={2} color="gray.100" fontWeight={600} fontSize="2xl">
                {data?.data.results[0].title}
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
                <Text color="gray.100" fontWeight={600} fontSize="xl">
                  Writer
                </Text>
                <Text color="rgba(255, 255, 255, 0.7)" fontSize={18}>
                  {data?.data.results[0].modified.substr(0, 10)}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </>
  );
}
