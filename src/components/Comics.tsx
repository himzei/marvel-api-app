import {
  Box,
  Grid,
  GridItem,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import Pagination from "react-js-pagination";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { comicsList } from "../api";
import ComicContent from "../components/ComicContent";
import { IProps } from "../routes/Characters";
import { IComicsResult } from "../routes/Home";
import ComicsSkeleton from "./ComicsSkeleton";

export default function Comics({ numContents, wSize }: IProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(numContents);

  const { data, isLoading, refetch } = useQuery<IComicsResult>(
    [page, limit],
    comicsList
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
    <HStack justifyContent={"center"} w="full" pt={32} pb={16}>
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
            <Box position={"absolute"} top="7px" bg="white">
              <Text textTransform={"uppercase"} fontSize={24} fontWeight="600">
                the Comics
              </Text>
            </Box>
          </Box>
          <Select
            placeholder="게시물 수"
            w="32"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
            <option value="30">30</option>
            <option value="36">36</option>
            <option value="42">42</option>
            <option value="48">48</option>
          </Select>
        </HStack>
        <Grid templateColumns={"repeat(6, 1fr)"} rowGap={8}>
          {isLoading ? <ComicsSkeleton /> : null}
          {data?.data?.results.map((data) => (
            <GridItem>
              <ComicContent
                comicId={data.id}
                path={data.thumbnail.path}
                extension={data.thumbnail.extension}
                title={data.title}
                modified={data.modified}
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
