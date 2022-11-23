import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IProps {
  comicId: number;
  path: string;
  extension: string;
  title: string;
  modified: string;
}

export default function ComicContent({
  comicId,
  path,
  extension,
  title,
  modified,
}: IProps) {
  return (
    <Link to={`/${comicId}`} key={comicId}>
      <Box>
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
              src={`${path}.${extension}`}
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
              {title}
            </Text>
            <Text color="gray.500">{modified.substr(0, 4)}</Text>
          </VStack>
        </VStack>
      </Box>
    </Link>
  );
}
