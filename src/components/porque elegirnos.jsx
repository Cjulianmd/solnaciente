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
    <Box p={4}>
      <Box mt={8}>
        <Flex align="center">
          <Image src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/279326250_689234775663675_5331470718712610748_n.jpg?alt=media&token=df430b5d-ab80-4921-84c9-f21d7bb100d7" alt="Imagen" boxSize="350px" mr={4} />
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              ¿Por qué elegirnos?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              En Inmobiliaria Sol Naciente nos dedicamos a brindar un servicio excepcional y ayudarte a encontrar la propiedad de tus sueños. Con nosotros, encontrarás:
            </Text>
            <ul style={{ paddingLeft: '1.25rem' }}>
              <li>
                <Text fontSize="lg" color="gray.600" mt={2}>
                  Amplia selección de propiedades en diferentes ubicaciones.
                </Text>
              </li>
              <li>
                <Text fontSize="lg" color="gray.600" mt={2}>
                  Equipo de agentes expertos y comprometidos.
                </Text>
              </li>
              <li>
                <Text fontSize="lg" color="gray.600" mt={2}>
                  Procesos sencillos y transparentes de compra o alquiler.
                </Text>
              </li>
            </ul>
          </Box>
        </Flex>
      </Box>
    </Box>

  );
};

export default Home;
