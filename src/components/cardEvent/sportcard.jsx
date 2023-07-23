import React from 'react';
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Image } from '@chakra-ui/react';

export default function SportEvent() {
  return (
    <Center py={6}>
      <Box maxW="445px" w="full" bg={useColorModeValue('white', 'gray.900')} boxShadow="2xl" rounded="md" p={6} overflow="hidden">
        <Box h="210px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
          <Image src="../../../public/img/sportbg.png" h="100%" w="100%" bg={useColorModeValue('white', 'gray.900')} />
        </Box>
        <Stack>
          <Text color="green.500" textTransform="uppercase" fontWeight={800} fontSize="sm" letterSpacing={1.1}>
            Sport
          </Text>
          <Heading color={useColorModeValue('gray.700', 'white')} fontSize="2xl" fontFamily="body">
            Créez et participez à des evenements prés de chez vous
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
