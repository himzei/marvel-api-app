import { GridItem, Skeleton } from "@chakra-ui/react";

interface IProps {
  numContents: number;
}

export default function CharacterSkeleton({ numContents }: IProps) {
  return (
    <>
      {Array(numContents)
        .fill(undefined)
        .map((_, i) => (
          <GridItem key={i}>
            <Skeleton w="180px" h="345px" />
          </GridItem>
        ))}
    </>
  );
}
