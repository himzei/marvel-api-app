import { VStack, Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { charactersList, comicsList, eventsList } from "../api";
import SkewBox from "../components/SkewBox";
import Slider from "../components/Slider";

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IResults {
  id: number;
  title: string;

  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
}

export interface IDataResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IResults[];
}

export interface IComicsResult {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: IDataResult;
}

export default function Home() {
  const { data: characterListData } = useQuery<IComicsResult>(
    ["characterList"],
    charactersList
  );

  const { data: comicsListData } = useQuery<IComicsResult>(
    ["comicsList"],
    comicsList
  );

  const { data: eventsListData } = useQuery<IComicsResult>(
    ["eventsList"],
    eventsList
  );

  console.log(eventsListData);
  return (
    <VStack w="full" spacing={10} mb={16}>
      <Slider />

      {/* Section Characters */}
      <VStack w="full">
        <VStack w="6xl" alignItems={"center"} justifyContent="flex-start">
          <Grid
            height="180px"
            overflow={"hidden"}
            templateColumns={{
              sm: "repeat(4, 1fr)",
              md: "repeat(6, 1fr)",
              lg: "repeat(8, 1fr)",
              xl: "repeat(10, 1fr)",
              "2xl": "repeat(12, 1fr)",
            }}
            gap={3}
            gridAutoFlow="row dense"
          >
            {characterListData?.data?.results.map((data) => (
              <GridItem>
                <VStack spacing={3} position="relative">
                  <Box
                    w="20"
                    h="20"
                    overflow={"hidden"}
                    rounded="full"
                    boxShadow={"md"}
                  >
                    <Image
                      w="80px"
                      h="80px"
                      objectFit={"cover"}
                      objectPosition="center"
                      src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    />
                  </Box>
                  <Box
                    position="absolute"
                    bottom={-2}
                    bg="red.500"
                    px="2"
                    py="0.5"
                    rounded="md"
                    color="white"
                  >
                    <Text fontWeight={"600"} fontSize="10px">
                      {data.name.substr(0, 6)}
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>

      {/* Section2 SkewBox */}
      <VStack w="full">
        <SkewBox
          title="Cinematic Universe"
          description="“LONG SHADOW” Concludes! The battle for Wakanda comes to a head! T’Challa has owned the path his secrets paved for the Hatut Zeraze’s takeover"
          imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
        />
      </VStack>

      {/* Section Comics */}
      <VStack w="full" position="relative" h="400px">
        <VStack
          w="6xl"
          bg="white"
          py={8}
          px={4}
          position={"absolute"}
          alignItems="center"
          justifyContent="center"
          top={-24}
          zIndex={99}
        >
          <Grid
            display={"flex"}
            height="300px"
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
                <VStack spacing={4} role="group">
                  <Box
                    w="40"
                    _groupHover={{
                      transform: "translateY(-15px)",
                    }}
                    h="64"
                    overflow={"hidden"}
                    rounded="lg"
                    bg="red.500"
                  >
                    <Image
                      h="full"
                      objectFit={"cover"}
                      objectPosition="center"
                      src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    />
                  </Box>

                  <VStack alignItems={"flex-start"} w="90%" spacing={0}>
                    <Text
                      fontWeight={"600"}
                      color="gray.800"
                      letterSpacing={"-1px"}
                      lineHeight={"20px"}
                      _groupHover={{
                        color: "red.400",
                      }}
                    >
                      {data.title}
                    </Text>
                    <Text color="gray.500">{data.modified.substr(0, 4)}</Text>
                  </VStack>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>

      {/* Section3 SkewBox */}
      <VStack w="full">
        <SkewBox
          title="Universe of Super Heroes"
          description="Coogler agreed, noting that with this decision “a new theme kind of surfaced for us of grief and loss and how do you move forward, after losing someone that meant so much to you."
          imgUrl="https://terrigen-cdn-dev.marvel.com/content/prod/1x/sre7000_trl_comp_wta_v0265.1061_r_0.jpg"
        />
      </VStack>

      {/* Section3 Evets List */}
      <VStack w="full" position="relative" h="400px">
        <VStack
          w="6xl"
          bg="white"
          py={8}
          px={4}
          position={"absolute"}
          alignItems="center"
          justifyContent="center"
          top={-24}
          zIndex={99}
        >
          <Grid
            display={"flex"}
            height="300px"
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
            {eventsListData?.data?.results.map((data) => (
              <GridItem>
                <VStack spacing={4} role="group">
                  <Box
                    w="260px"
                    h="160px"
                    overflow={"hidden"}
                    rounded="lg"
                    position="relative"
                  >
                    <Image
                      transform="rotateY(360deg)"
                      opacity="1"
                      transition="0.4s"
                      _groupHover={{
                        transform: "rotateY(180deg)",
                        opacity: 0,
                      }}
                      w="full"
                      objectFit={"cover"}
                      objectPosition="center"
                      src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="full"
                      h="full"
                      bg="gray.400"
                      opacity="0"
                      transform="rotateY(180deg)"
                      transition="0.4s"
                      _groupHover={{
                        transform: "rotateY(360deg)",
                        opacity: "1",
                      }}
                    ></Box>
                  </Box>

                  <VStack alignItems={"flex-start"} w="95%" spacing={0}>
                    <Text
                      fontWeight={"600"}
                      color="gray.500"
                      letterSpacing={"-1px"}
                      lineHeight={"20px"}
                      _groupHover={{
                        color: "red.400",
                      }}
                    >
                      {data.title}
                    </Text>
                    <Text color="gray.800">
                      {data.description.substr(0, 80)}
                    </Text>
                  </VStack>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </VStack>
  );
}
