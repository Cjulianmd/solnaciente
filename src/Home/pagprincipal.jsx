import React from 'react';
import Casas from '../components/casas';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

import Navbar from '../components/navbar';
import Bar from '../components/bar';
import Somos from '../components/quienessomos';
import Elegirnos from '../components/porque elegirnos';

const Home = () => {
  return (
    <Box p={4}>
      <Navbar />

      <Box textAlign="center" position="relative" maxWidth="100%">
        <div style={{ width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/banner_main.png?alt=media&token=49a9eab3-878c-4dfd-afa1-e3421a340876"
            alt="Descripción de la imagen"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          px={4}
        >
          <Heading as="h2" size="xl" mb={4} color="white">
            Encuentra tu hogar ideal
          </Heading>
          <Text fontSize="2xl" color="white">
            Explora nuestras propiedades disponibles y encuentra el lugar perfecto para ti.
          </Text>
        </Flex>
      </Box>
      <Somos />
      <Casas />
      <Elegirnos />
      <Bar />
    </Box>

  );
};

export default Home;
