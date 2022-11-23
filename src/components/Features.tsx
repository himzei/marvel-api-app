import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { HiDocumentDuplicate } from "react-icons/hi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiBellMinus } from "react-icons/bi";

export default function Features() {
  return (
    <HStack w="full" justifyContent={"center"} py="16">
      <HStack w="5xl" justifyContent={"space-between"} color="gray.700">
        <Box w="33%">
          <HStack alignItems={"flex-start"} spacing={4}>
            <HiDocumentDuplicate size={32} />

            <VStack alignItems={"flex-start"} w="90%">
              <Text
                color="gray.900"
                fontWeight={600}
                fontSize="20px"
                letterSpacing={"-0.5px"}
              >
                노마드코더 챌린지 과제
              </Text>
              <Text color="gray.500">
                https://nomadcoders.co/c/airbnb-challenge/lobby
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box w="33%">
          <HStack alignItems={"flex-start"} spacing={4} w="90%">
            <MdOutlineProductionQuantityLimits size={36} />

            <VStack alignItems={"flex-start"}>
              <Text
                color="gray.900"
                fontWeight={600}
                fontSize="20px"
                letterSpacing={"-0.5px"}
              >
                3,000 하루 API 요청량
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
            <BiBellMinus size={32} />

            <VStack alignItems={"flex-start"} w="90%">
              <Text
                color="gray.900"
                fontWeight={600}
                fontSize="20px"
                letterSpacing={"-0.5px"}
              >
                React + Django
              </Text>
              <Text color="gray.500">
                React와 Django를 공부할 수 있는 노마드코더의 에어비앤비 수업
              </Text>
            </VStack>
          </HStack>
        </Box>
      </HStack>
    </HStack>
  );
}
