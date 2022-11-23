import {
  Box,
  Grid,
  GridItem,
  HStack,
  Select,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { eventsList } from "../api";
import { IProps } from "../routes/Characters";
import { IComicsResult } from "../routes/Home";
import Pagination from "react-js-pagination";
import EventsContent from "./EventsContent";
import EventsSkeleton from "./EventsSkeleton";

export default function Events({ numContents, wSize }: IProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(numContents);
  const backColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "gray.200");

  const { data, isLoading, refetch } = useQuery<IComicsResult>(
    [page, limit],
    eventsList
  );
  console.log(data, isLoading);
  const total = Number(data?.data.total);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };
  return (
    <HStack justifyContent={"center"} w="full" pt="32" pb="16">
      <VStack
        w={wSize}
        spacing={8}
        alignItems="flex-start"
        justifyContent={"center"}
      >
        <HStack w="full" justifyContent={"space-between"}>
          <Box position="relative" overflow="hidden" w="250px" h="50px" pl={4}>
            <Box
              position="absolute"
              top="15px"
              left="40px"
              w="100px"
              h="100px"
              borderLeft={"5px solid red"}
              transform={"translate(-30px) rotate(45deg)"}
            />
            <Box position={"absolute"} top="7px" bg={backColor}>
              <Text
                textTransform={"uppercase"}
                color={textColor}
                fontSize={24}
                fontWeight="600"
              >
                the Events
              </Text>
            </Box>
          </Box>
          <Select
            placeholder="게시물 수"
            w="32"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
          </Select>
        </HStack>
        <Grid templateColumns={"repeat(4, 1fr)"} rowGap={16}>
          {isLoading ? <EventsSkeleton /> : null}
          {data?.data?.results.map((data, index) => (
            <GridItem key={index}>
              <EventsContent
                eventId={data.id}
                path={data.thumbnail.path}
                extension={data.thumbnail.extension}
                title={data.title}
                description={data.description}
              />
            </GridItem>
          ))}
        </Grid>
        <Box w="full" display={"flex"} justifyContent="center">
          <Pagination
            activePage={page}
            itemsCountPerPage={limit}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </Box>
      </VStack>
    </HStack>
  );
}
