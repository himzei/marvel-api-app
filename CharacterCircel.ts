<VStack w="full" mb={16} mt={12}>
  <VStack w="6xl" alignItems={"center"} justifyContent="flex-start">
    <Grid
      height="180px"
      overflow={"hidden"}
      templateColumns={{
        sm: "repeat(4, 1fr)",
        md: "repeat(6, 1fr)",
        lg: "repeat(8, 1fr)",
        xl: "repeat(10, 1fr)",
        "2xl": "repeat(12, 1fr)",
      }}
      gap={4}
      gridAutoFlow="row dense"
      position="relative"
    >
      {characterListData?.data?.results.((data) => (
        <Link to={`/character/${data.id}`}>
          <GridItem role="group">
            <VStack spacing={3}>
              <Box
                w="20"
                h="20"
                overflow={"hidden"}
                rounded="full"
                boxShadow={"md"}
              >
                <Image
                  w="80px"
                  h="80px"
                  objectFit={"cover"}
                  objectPosition="center"
                  src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                />
              </Box>
              <Box
                transform={"translateY(-18px)"}
                bg="gray.800"
                px="2"
                py="0.5"
                rounded="md"
                color="white"
                transition="0.4s"
                _groupHover={{
                  background: "red.500",
                }}
              >
                <Text fontWeight={"600"} fontSize="10px">
                  {data.name.substr(0, 6)}
                </Text>
              </Box>
            </VStack>
            <Box
              position={"absolute"}
              bottom="6"
              left="0"
              opacity="0"
              transition="0.4s"
              _groupHover={{
                opacity: "1",
              }}
            >
              <VStack
                h="40px"
                alignItems={"flex-start"}
                justifyContent="flex-start"
              >
                {/* <Heading fontSize={20}>Description</Heading> */}
                <Text color="gray.700">{data.description};</Text>
              </VStack>
            </Box>
          </GridItem>
        </Link>
      ))}
    </Grid>
  </VStack>
</VStack>;
