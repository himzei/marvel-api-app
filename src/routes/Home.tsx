import {
  VStack,
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { charactersList, comicsList, eventsList, seriesList } from "../api";
import SkewBox from "../components/SkewBox";
import SliderSection from "../components/SliderSection";

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IResults {
  id: number;
  title: string;
  type: string;
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

  const { data: seriesListData } = useQuery<IComicsResult>(
    ["seriesList"],
    seriesList
  );

  console.log(comicsListData);
  return (
    <>
      <SliderSection />

      {/* Section Characters */}
      <VStack w="full" mb={16} mt={12}>
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
            gap={4}
            gridAutoFlow="row dense"
            position="relative"
          >
            {characterListData?.data?.results.map((data) => (
              <GridItem role="group">
                <VStack spacing={3}>
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
                    transform={"translateY(-18px)"}
                    bg="gray.800"
                    px="2"
                    py="0.5"
                    rounded="md"
                    color="white"
                    transition="0.4s"
                    _groupHover={{
                      background: "red.500",
                    }}
                  >
                    <Text fontWeight={"600"} fontSize="10px">
                      {data.name.substr(0, 6)}
                    </Text>
                  </Box>
                </VStack>
                <Box
                  position={"absolute"}
                  bottom="6"
                  left="0"
                  opacity="0"
                  transition="0.4s"
                  _groupHover={{
                    opacity: "1",
                  }}
                >
                  <VStack
                    h="40px"
                    alignItems={"flex-start"}
                    justifyContent="flex-start"
                  >
                    {/* <Heading fontSize={20}>Description</Heading> */}
                    <Text color="gray.700">{data.description};</Text>
                  </VStack>
                </Box>
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
          top={-16}
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
              <Link to={`/${data.id}`}>
                <GridItem>
                  <VStack spacing={4} role="group">
                    <Box
                      w="40"
                      transition={"0.4s"}
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
              </Link>
            ))}
          </Grid>
        </VStack>
      </VStack>

      {/* Section3 SkewBox */}
      <VStack w="full">
        <SkewBox
          title="Universe of Super Heroes"
          description="Coogler agreed, noting that with this decision “a new theme kind of surfaced for us of grief and loss and how do you move forward"
          imgUrl="https://terrigen-cdn-dev.marvel.com/content/prod/1x/sre7000_trl_comp_wta_v0265.1061_r_0.jpg"
        />
      </VStack>

      {/* Section3 Evets List */}
      <VStack w="full" position="relative" h="300px">
        <VStack
          w="6xl"
          bg="white"
          py={8}
          px={4}
          position={"absolute"}
          alignItems="center"
          justifyContent="center"
          top={-16}
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
                      bg="red.500"
                      opacity="0"
                      transform="rotateY(180deg)"
                      transition="0.4s"
                      _groupHover={{
                        transform: "rotateY(360deg)",
                        opacity: "1",
                      }}
                    >
                      <VStack p="4" alignItems={"flex-start"}>
                        <Text fontWeight={"600"} color="white">
                          Details
                        </Text>
                        <Divider />
                      </VStack>
                    </Box>
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

      {/* Section4 Series List */}
      <VStack w="full" alignItems={"center"} h="auto">
        <VStack w="6xl" alignItems={"flex-start"}>
          <Box
            w="2px"
            h="80px"
            mb="10"
            transform="rotate(45deg) translateX(50px)"
            position="relative"
          >
            <Box
              bg="white"
              py={0.5}
              px={2}
              transform="rotate(-45deg)"
              w="40"
              position="absolute"
              left="-50px"
              top="-10px"
            >
              <Text textTransform={"uppercase"} fontSize={24} fontWeight="600">
                the Series
              </Text>
            </Box>
          </Box>
          <VStack>
            {seriesListData?.data?.results.map((data) => (
              <>
                <HStack w="full" h="full" spacing="8">
                  <Box
                    w="410px"
                    h="220px"
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
                  </Box>
                  <VStack
                    h="220px"
                    spacing="0"
                    alignItems={"flex-start"}
                    justifyContent="flex-start"
                  >
                    <Text
                      color="gray.500"
                      textTransform={"uppercase"}
                      fontSize="14px"
                      fontWeight={600}
                    >
                      {data.type ? data.type : "No Type"}
                    </Text>
                    <Text fontWeight={600} fontSize={20} color="gray.700">
                      {data.title}
                    </Text>
                    <Text>{data.modified.substr(0, 10)}</Text>
                  </VStack>
                </HStack>
                <Box h="4" w="full" display={"flex"} alignItems="center">
                  <Box h="1px" w="full" bg="gray.500" />
                </Box>
              </>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
