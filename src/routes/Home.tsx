import { VStack, Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack spacing={10} mb={16}>
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
    </VStack>
  );
}
