import React from 'react';
import Casas from '../components/casas';
import {
    Box,
    Heading,
    Text,
    Button,
    Flex,
    Image,
    Spacer,
  } from '@chakra-ui/react';

  import Navbar from '../components/navbar';
import Bar from '../components/bar';
const Home = () => {
  return (
    <Box p={4}>
   <Navbar/>

    <Box textAlign="center" position="relative" maxWidth="100%">
    <Image src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/banner_main.png?alt=media&token=49a9eab3-878c-4dfd-afa1-e3421a340876" alt="Descripción de la imagen"  />
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
        <Text fontSize="2xl"  color="white">
          Explora nuestras propiedades disponibles y encuentra el lugar perfecto para ti.
        </Text>
      </Flex>
    </Box>    
    <Box mt={8}>
  <Flex align="center">
    
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
    </Box><Image src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/279326250_689234775663675_5331470718712610748_n.jpg?alt=media&token=df430b5d-ab80-4921-84c9-f21d7bb100d7" alt="Imagen" boxSize="350px" mr={4} />
  </Flex>
</Box>
    <Casas/>

    <Box mt={8}>
  <Flex align="center">
    <Image src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/279326250_689234775663675_5331470718712610748_n.jpg?alt=media&token=df430b5d-ab80-4921-84c9-f21d7bb100d7" alt="Imagen" boxSize="350px" mr={4} />
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

<Bar />
</Box>
  
);
};

export default Home;
