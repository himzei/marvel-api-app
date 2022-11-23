import { Box, HStack, Skeleton, VStack } from "@chakra-ui/react";

export default function ComicsSkeleton() {
  return (
    <>
      <HStack justifyContent={"center"} spacing={4}>
        {Array(6)
          .fill(undefined)
          .map((_, i) => (
            <Box key={i}>
              <VStack spacing={4} alignItems="flex-start">
                <Skeleton w="160px" h="255px" />
                <Skeleton w="150px" h="20px" />
                <Skeleton w="100px" h="20px" />
              </VStack>
            </Box>
          ))}
      </HStack>
    </>
  );
}
