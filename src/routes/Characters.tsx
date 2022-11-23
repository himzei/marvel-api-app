import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { charactersData } from "../api";
import Pagination from "react-js-pagination";
import "./Paging.css";

interface IThumbnail {
  extension: string;
  path: string;
}
interface ICharacterResults {
  description: string;
  id: number;
  modified: string;
  name: string;
  thumbnail: IThumbnail;
}
interface IData {
  count: number;
  total: number;
  limit: number;
  offset: 0;
  results: ICharacterResults[];
}
interface ICharacters {
  code: number;
  data: IData;
}

export interface IProps {
  numContents: number;
  wSize: string;
}

export default function Characters({ numContents, wSize }: IProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(numContents);

  const { data, refetch } = useQuery<ICharacters>(
    [page, limit],
    charactersData
  );

  const total = Number(data?.data.total);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <VStack
      py={16}
      textTransform={"uppercase"}
      display="flex"
      justifyContent={"center"}
      spacing={4}
    >
      <HStack w={wSize} py={4} justifyContent="space-between">
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
              Characters
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

      <Grid templateColumns={"repeat(6, 1fr)"} w={wSize} gap="4" rowGap={8}>
        {data?.data.results.map((item) => (
          <Link to={`${item.id}`}>
            <GridItem bg="red" w="full" role="group">
              <VStack h="auto">
                <Box w="full" h="48" overflow={"hidden"}>
                  <Image
                    transition="0.4s"
                    _groupHover={{
                      transform: "scale(1.2)",
                    }}
                    w="full"
                    h="48"
                    objectFit={"cover"}
                    objectPosition="center"
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                </Box>
                <Box
                  w="full"
                  h="36"
                  py={4}
                  px={6}
                  position="relative"
                  overflow={"hidden"}
                >
                  <Box
                    bg="gray.800"
                    position="absolute"
                    w="full"
                    h="full"
                    top="0"
                    left="0"
                    transition="0.4s"
                    _groupHover={{
                      top: "160px",
                    }}
                  />
                  <Text
                    fontSize={14}
                    position="absolute"
                    color="gray.100"
                    fontWeight={600}
                    textTransform="uppercase"
                  >
                    {item.name}
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Box>
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
  );
}
