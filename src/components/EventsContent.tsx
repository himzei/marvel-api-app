import { Box, Divider, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IProps {
  eventId: number;
  path: string;
  extension: string;
  title: string;
  description: string;
  textColor?: any;
}

export default function EventsContent({
  eventId,
  path,
  extension,
  title,
  description,
  textColor,
}: IProps) {
  return (
    <Link to={`/events/${eventId}`}>
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
              src={`${path}.${extension}`}
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

          <VStack alignItems={"flex-start"} w="90%" spacing={2}>
            <Text
              fontWeight={"600"}
              color={textColor}
              letterSpacing={"-1px"}
              lineHeight={"20px"}
              _groupHover={{
                color: "red.400",
              }}
            >
              {title}
            </Text>
            <Text color={textColor}>{description.substr(0, 80)}</Text>
          </VStack>
        </VStack>
      </Box>
    </Link>
  );
}
