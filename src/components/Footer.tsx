import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack
      w="full"
      bg="gray.800"
      h="300px"
      py="20"
      justifyContent="center"
      alignItems="flex-start"
    >
      <HStack w="7xl" spacing="4">
        <Box w="10%">
          {" "}
          <Image src="https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png" />
        </Box>
        <Box w="30%">
          <VStack
            color="gray.100"
            alignItems={"flex-start"}
            textTransform="uppercase"
          >
            <Text>About Marvel</Text>
            <Text>Help/Faqs</Text>
            <Text>Careers</Text>
            <Text>Internships</Text>
          </VStack>
        </Box>
      </HStack>
    </HStack>
  );
}
