import React from 'react';
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

const Team = () => {
  return (
    <Box p={4}>
      <Box h={20} />
      <Flex align="center" justify="center" flexWrap="wrap">
        <VStack spacing={8} alignItems="center">
          <Box w="200px">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/magaly.jpg?alt=media&token=379a90f9-9a22-4925-9716-da60c4404c90"
              alt="Persona 1"
              borderRadius="full"
              boxSize="150px"
            />          <Text fontSize="lg" fontWeight="bold">Magaly Velásquez</Text>
          <Text color="gray.600">CEO</Text>
          </Box>

        </VStack>
      </Flex>
      <Box h={20} />
    </Box>
  );
};

export default Team;
