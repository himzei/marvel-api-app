import { Box } from "@chakra-ui/react";
import Events from "../components/Events";

export default function EventsList() {
  return (
    <Box w="full">
      <Events numContents={24} wSize={"6xl"} />
    </Box>
  );
}
