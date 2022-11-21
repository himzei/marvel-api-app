import {
  VStack,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { charactersList, comicsList } from "../api";

interface IThumbnail {
  path: string;
  extension: string;
}

interface IResults {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
}

interface IDataResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IResults[];
}

interface IComicsResult {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IDataResult;
}

export default function Home() {
  const { data: characterListData, isLoading: characterListIsLoading } =
    useQuery<IComicsResult>(["characterList"], charactersList);

  const { data: comicsListData } = useQuery<IComicsResult>(
    ["comicsList"],
    comicsList
  );

  console.log(comicsListData);
  return (
    <VStack w="full" spacing={10} mb={16}>
      <VStack
        position={"relative"}
        h="350px"
        w="full"
        justifyContent="center"
        color="white"
        backgroundImage={
          "url('https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg')"
        }
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Box position={"absolute"} w="full" h="full" left={0} top={0} />
        <VStack
          position={"absolute"}
          zIndex={9}
          w="80%"
          alignItems={"flex-start"}
          spacing={8}
        >
          <VStack alignItems={"flex-start"}>
            <Heading
              fontSize={{
                sm: 20,
                lg: 30,
                "2xl": 40,
              }}
              fontWeight={700}
            >
              November 16's New Marvel
            </Heading>
            <Text
              fontSize={{
                sm: 16,
                lg: 20,
                "2xl": 24,
              }}
              fontWeight={600}
              mb={10}
            >
              This week's Marvel comics are filled with new beginnings.
            </Text>
          </VStack>
        </VStack>
      </VStack>

      {/* Section Characters */}
      <VStack w="full">
        <VStack w="7xl" alignItems={"flex-start"} justifyContent="flex-start">
          <Box py={1} px={3} bg="gray.900" mb={4}>
            <Text
              fontSize={14}
              color="white"
              textTransform={"uppercase"}
              fontWeight="600"
            >
              Comics
            </Text>
          </Box>
          <Grid
            height="200px"
            overflow={"hidden"}
            templateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(6, 1fr)",
              "2xl": "repeat(7, 1fr)",
            }}
            gap={4}
            gridAutoFlow="row dense"
          >
            {characterListData?.data?.results.map((data) => (
              <GridItem>
                <VStack spacing={3}>
                  <Box w="40" h="40" overflow={"hidden"} rounded="full">
                    <Image
                      src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    />
                  </Box>

                  <Text fontWeight={"600"}>{data.name}</Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>

      {/* Section Comics */}
      <VStack w="full">
        <VStack w="7xl" alignItems={"flex-start"} justifyContent="flex-start">
          <Box py={1} px={3} bg="gray.900" mb={4}>
            <Text
              fontSize={14}
              color="white"
              textTransform={"uppercase"}
              fontWeight="600"
            >
              Comics
            </Text>
          </Box>
          <Grid
            height="300px"
            overflow={"hidden"}
            templateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(6, 1fr)",
              "2xl": "repeat(7, 1fr)",
            }}
            gap={6}
            gridAutoFlow="row dense"
          >
            {comicsListData?.data?.results.map((data) => (
              <GridItem>
                <VStack spacing={10}>
                  <Box
                    w="40"
                    h="64"
                    overflow={"hidden"}
                    rounded="lg"
                    bg="red.500"
                  >
                    <Image
                      objectFit={"cover"}
                      objectPosition="center"
                      src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    />
                  </Box>

                  <Text fontWeight={"600"}>{data.name}</Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </VStack>
  );
}
