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
  <Box/>
    <Box pr={4}>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/300042397_759562945297524_2980089186148864815_n.jpg?alt=media&token=f7d835ef-2057-461e-8774-d6588e81e36b"
        alt="Imagen"
        boxSize="300px"
        objectFit="cover"
      />
    </Box>
    <Box>
      <Heading as="h3" size="lg" mb={2}>
        ¿Por qué elegirnos?
      </Heading>
      <Text fontSize="lg" color="gray.600" mt={2}>
        En Inmobiliaria Sol Naciente nos dedicamos a brindar un servicio excepcional y ayudarte a encontrar la propiedad de tus sueños. Con nosotros, encontrarás:
      </Text>
      <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
        <li>
          <Text fontSize="lg" color="gray.600">
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

  
  


  );
};

export default Home;
