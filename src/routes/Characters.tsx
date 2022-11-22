import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { charactersData } from "../api";

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
  limit: number;
  offset: 0;
  results: ICharacterResults[];
}
interface ICharacters {
  code: number;
  data: IData;
}

export default function Characters() {
  const { data } = useQuery<ICharacters>(["charactersData"], charactersData);
  console.log(data);
  return (
    <VStack
      py={32}
      textTransform={"uppercase"}
      display="flex"
      justifyContent={"center"}
    >
      <Box w="7xl" py={4}>
        <Text textTransform={"uppercase"} fontSize={24} fontWeight="600">
          Featured Characters
        </Text>
      </Box>
      <Grid templateColumns={"repeat(6, 1fr)"} w="7xl" gap="4" rowGap={8}>
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
    </VStack>
  );
}
