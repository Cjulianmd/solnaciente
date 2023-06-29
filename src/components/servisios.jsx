import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';
const Home = () => {
  return (

    <Box mt={8}>
      <Flex align="center">
        <Box pr={4}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/342898204_507357848115002_8191225027200194481_n.jpg?alt=media&token=66aed49e-5bca-41d8-9a8a-1feabad04658"
            alt="Imagen"
            boxSize="310px"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={2}>
            Servicios que ofrecemos
          </Heading>
          <Text fontSize="lg" color="gray.600" mt={2}>
            En Inmobiliaria Sol Naciente ofrecemos una variedad de servicios para ayudarte en tus necesidades inmobiliarias. 
          </Text>
          <Text fontSize="lg" color="gray.600" mt={2}>
            Algunos de nuestros servicios incluyen:
          </Text>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
            <li>
              <Text fontSize="lg" color="gray.600">
                Búsqueda y selección de propiedades.
              </Text>
            </li>
            <li>
              <Text fontSize="lg" color="gray.600" mt={2}>
                Asesoramiento en procesos de compra o alquiler.
              </Text>
            </li>
            <li>
              <Text fontSize="lg" color="gray.600" mt={2}>
                Valoración de propiedades.
              </Text>
            </li>
            <li>
              <Text fontSize="lg" color="gray.600" mt={2}>
                Gestión de trámites legales y administrativos.
              </Text>
            </li>
            <li>
              <Text fontSize="lg" color="gray.600" mt={2}>
                Apoyo en la negociación y cierre de contratos.
              </Text>
            </li>
          </ul>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
