import { Box } from "@chakra-ui/react";
import Characters from "./Characters";

export default function CharactersList() {
  return (
    <Box>
      <Characters numContents={24} wSize={"6xl"} />
    </Box>
  );
}
