import { VStack, Box, Text, Image, Divider, HStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { charactersList, comicsList, eventsList, seriesList } from "../api";
import ComicsSkeleton from "../components/ComicsSkeleton";
import EventsSkeleton from "../components/EventsSkeleton";
import Features from "../components/Features";
import SkewBox from "../components/SkewBox";
import SliderSection from "../components/SliderSection";
import Characters from "./Characters";
import Slider from "react-slick";
import styled from "styled-components";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ComicContent from "../components/ComicContent";

const Div = styled.div`
  transform: translateY(-50px);
  width: 30px;
  height: 30px;
  position: absolute;
  right: -26px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
  &:before {
    color: black;
  }
`;
const DivPre = styled.div`
  transform: translateY(-50px);
  width: 30px;
  height: 30px;
  position: absolute;
  left: -26px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
  &:before {
    color: black;
  }
`;

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
  const settingsEvent = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    autoPlay: true,
    nextArrow: (
      <Div>
        <MdOutlineArrowForwardIos />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <MdOutlineArrowBackIosNew />
      </DivPre>
    ),
  };

  const settingsComic = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoPlay: true,
    swipeToSlide: true,
    autoPlaySpeed: 5000,
    nextArrow: (
      <Div>
        <MdOutlineArrowForwardIos />
      </Div>
    ),
    prevArrow: (
      <DivPre>
        <MdOutlineArrowBackIosNew />
      </DivPre>
    ),
  };

  const { data: characterListData } = useQuery<IComicsResult>(
    ["characterList"],
    charactersList
  );

  const { data: comicsListData, isLoading: comicsListIsLoading } =
    useQuery<IComicsResult>([1, 6], comicsList);

  const { data: eventsListData, isLoading: eventsIsLoading } =
    useQuery<IComicsResult>(["eventsList"], eventsList);

  const { data: seriesListData } = useQuery<IComicsResult>(
    ["seriesList"],
    seriesList
  );

  console.log(characterListData);
  return (
    <>
      <Divider mb={"30px"} />
      <SliderSection />

      {/* Section Features */}
      <Features />

      {/* Section2 SkewBox */}
      <VStack w="full">
        <SkewBox
          title="Comics"
          description="“LONG SHADOW” Concludes! The battle for Wakanda comes to a head! T’Challa has owned the path his secrets paved for the Hatut Zeraze’s takeover"
          imgUrl="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
        />
      </VStack>

      {/* Section Comics */}
      <VStack w="full" position="relative" h="400px">
        <Box
          w="6xl"
          bg="white"
          py={8}
          px={4}
          position={"absolute"}
          top={-16}
          zIndex={99}
        >
          {comicsListIsLoading ? <ComicsSkeleton /> : null}
          <Slider {...settingsComic}>
            {comicsListData?.data?.results.map((data) => (
              <ComicContent
                comicId={data.id}
                path={data.thumbnail.path}
                extension={data.thumbnail.extension}
                title={data.title}
                modified={data.modified}
              />
            ))}
          </Slider>
        </Box>
      </VStack>

      {/* Section3 SkewBox */}
      <VStack w="full">
        <SkewBox
          title="Events"
          description="Coogler agreed, noting that with this decision “a new theme kind of surfaced for us of grief and loss and how do you move forward"
          imgUrl="https://terrigen-cdn-dev.marvel.com/content/prod/1x/sre7000_trl_comp_wta_v0265.1061_r_0.jpg"
        />
      </VStack>

      {/* Section3 Evets List */}
      <VStack w="full" position="relative" h="300px">
        <Box
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
          {eventsIsLoading ? <EventsSkeleton /> : null}
          <Slider {...settingsEvent}>
            {eventsListData?.data?.results.map((data) => (
              <Link to={`/${data.id}`}>
                <Box>
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
                </Box>
              </Link>
            ))}
          </Slider>
        </Box>
      </VStack>

      {/* 캐릭터 */}
      <HStack w="full" justifyContent={"center"}>
        <Box w="6xl">
          <Characters numContents={12} wSize={"6xl"} />
        </Box>
      </HStack>

      {/* Section4 Series List */}
      <VStack w="full" alignItems={"center"} h="auto">
        <VStack w="6xl" alignItems={"flex-start"} spacing={8}>
          <Box position="relative" overflow="hidden" w="250px" h="50px">
            <Box
              position="absolute"
              top="15px"
              left="40px"
              w="100px"
              h="100px"
              borderLeft={"5px solid red"}
              transform={"translate(-30px) rotate(45deg)"}
            />
            <Box position={"absolute"} top="7px" bg="white">
              <Text textTransform={"uppercase"} fontSize={24} fontWeight="600">
                the series
              </Text>
            </Box>
          </Box>
          <VStack alignItems={"flex-start"}>
            {seriesListData?.data?.results.map((data) => (
              <>
                <Link to={`/${data.id}`}>
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
                </Link>
              </>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
