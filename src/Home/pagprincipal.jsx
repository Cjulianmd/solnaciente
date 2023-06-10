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
    <Image src="https://arrendamientossantafe.com/static/img/banner_main.png" alt="Descripción de la imagen"  />
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
    </Box><Image src="https://scontent.fmzl1-1.fna.fbcdn.net/v/t39.30808-6/279326250_689234775663675_5331470718712610748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=gs70xHoDh2YAX81TDj8&_nc_ht=scontent.fmzl1-1.fna&oh=00_AfCAI0w-5gEjM9dWPsMowkxJFR6bWE7_TWYownVYAFrvvQ&oe=6489A0D2" alt="Imagen" boxSize="350px" mr={4} />
  </Flex>
</Box>
    <Casas/>

    <Box mt={8}>
  <Flex align="center">
    <Image src="https://scontent.fmzl1-1.fna.fbcdn.net/v/t39.30808-6/279326250_689234775663675_5331470718712610748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=gs70xHoDh2YAX81TDj8&_nc_ht=scontent.fmzl1-1.fna&oh=00_AfCAI0w-5gEjM9dWPsMowkxJFR6bWE7_TWYownVYAFrvvQ&oe=6489A0D2" alt="Imagen" boxSize="350px" mr={4} />
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
