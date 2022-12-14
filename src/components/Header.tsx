import {
  Stack,
  HStack,
  Text,
  Box,
  Image,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        setScroll(true);
      } else if (event.deltaY > 0) {
        setScroll(false);
      }
    });
  }, []);
  return (
    <Stack
      transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
      transition="0.4s"
      zIndex={999}
      w="100%"
      h="60px"
      color="white"
      fontWeight={"600"}
      fontSize={"sm"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow="sm"
      bg="gray.800"
      position="fixed"
    >
      <HStack
        w={{ md: "70%", lg: "80%", xl: "80%" }}
        justifyContent={"space-between"}
      >
        <HStack
          spacing={"8"}
          fontWeight="600"
          fontSize={16}
          textTransform="uppercase"
        >
          <Link to="/">
            <Box w="24">
              <Image src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" />
            </Box>
          </Link>
          <HStack spacing="4">
            <Link to="/characters">
              <Text>characters</Text>
            </Link>
            <Link to="/comics">
              <Text>comics</Text>
            </Link>
            <Link to="/events">
              <Text>events</Text>
            </Link>
          </HStack>
        </HStack>
        <HStack>
          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle dark mode"
            icon={
              colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />
            }
          />
        </HStack>
      </HStack>
    </Stack>
  );
}
