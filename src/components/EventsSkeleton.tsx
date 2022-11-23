import { GridItem, Skeleton, VStack } from "@chakra-ui/react";

export default function EventsSkeleton() {
  return (
    <>
      {Array(4)
        .fill(undefined)
        .map((_, i) => (
          <GridItem key={i}>
            <VStack spacing={4} alignItems="flex-start">
              <Skeleton rounded="lg" w="240px" h="160px" />
              <VStack spacing={3} alignItems="flex-start">
                <Skeleton w="200px" h="15px" />
                <Skeleton w="180px" h="10px" />
                <Skeleton w="180px" h="10px" />
                <Skeleton w="80px" h="10px" />
              </VStack>
            </VStack>
          </GridItem>
        ))}
    </>
  );
}
