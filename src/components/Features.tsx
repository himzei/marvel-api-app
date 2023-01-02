import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { HiDocumentDuplicate } from "react-icons/hi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiBellMinus } from "react-icons/bi";

export default function Features() {
  const textColor = useColorModeValue("gray.500", "white");
  return (
    <HStack w="full" justifyContent={"center"} py="16">
      <HStack w="5xl" justifyContent={"space-between"} color="gray.700">
        <Box w="33%">
          <HStack alignItems={"flex-start"} spacing={4}>
            <HiDocumentDuplicate size={32} color="#bbbbbb" />

            <VStack alignItems={"flex-start"} w="90%">
              <Text
                color={textColor}
                fontWeight={600}
                fontSize="20px"
                letterSpacing={"-0.5px"}
              >
                스마트웹앱 2기
              </Text>
              <Text color="gray.500">
                영진직업전문학교 스마트웹앱 2기 <br />
                리액트 수업
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box w="33%">
          <HStack alignItems={"flex-start"} spacing={4} w="90%">
            <MdOutlineProductionQuantityLimits color="#bbbbbb" size={36} />

            <VStack alignItems={"flex-start"}>
              <Text
                color={textColor}
                fontWeight={600}
                fontSize="20px"
                letterSpacing={"-0.5px"}
              >
                API 요청량 하루 3000번 리미트
              </Text>
              <Text color="gray.500">
                하루 API요청 횟수가 3,000회로 제한되어 있어 컨텐츠가 보이지 않을
                수 있습니다.
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box w="33%">
          <HStack alignItems={"flex-start"} spacing={4}>
            <BiBellMinus size={32} color="#bbbbbb" />

            <VStack alignItems={"flex-start"} w="90%">
              <Text
                color={textColor}
                fontWeight={600}
                fontSize="20px"
                letterSpacing={"-0.5px"}
              >
                React
              </Text>
              <Text color="gray.500">
                React + Typescript + Chakra UI를 활용한 마블페이지 제작
              </Text>
            </VStack>
          </HStack>
        </Box>
      </HStack>
    </HStack>
  );
}
