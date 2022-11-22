import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";

export default function SliderSection() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box h="450px" overflow={"hidden"}>
      <Slider {...settings}>
        <Box>
          <VStack
            position={"relative"}
            h="480px"
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
        </Box>
        <Box>
          <VStack
            position={"relative"}
            h="480px"
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
        </Box>
      </Slider>
    </Box>
  );
}
