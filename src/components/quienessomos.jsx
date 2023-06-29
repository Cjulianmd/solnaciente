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
          <Image src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/279326250_689234775663675_5331470718712610748_n.jpg?alt=media&token=df430b5d-ab80-4921-84c9-f21d7bb100d7" alt="Imagen" boxSize="300px" mr={4} />
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              ¿Quienes somos?
            </Heading>
            <Text fontSize="lg" color="gray.600" mt={0} ml={0} mr={8}>
              Sol Naciente es una inmobiliaria ubicada en San Pedro de los Milagros, Antioquia, Colombia. Nuestro objetivo es ayudarte a encontrar la propiedad ideal. Contamos con un equipo de agentes expertos, una amplia selección de propiedades y procesos sencillos y transparentes. ¡Confía en nosotros para hacer realidad tus sueños de vivienda en esta encantadora región colombiana!
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>

  );
};

export default Home;
