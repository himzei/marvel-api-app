import { Box } from "@chakra-ui/react";
import Comics from "../components/Comics";

export default function ComicsList() {
  return (
    <Box w="full">
      <Comics numContents={24} wSize={"6xl"} />
    </Box>
  );
}
