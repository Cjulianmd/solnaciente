import React from 'react';
import {
  Box,
  Heading,
  Text,

  Flex,
  Image,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';

const Casas = () => {
  return (
    <Box p={4}>
      <Flex alignItems="center" mb={4}>
        <Image src="/logo.png" alt="Logo" boxSize="50px" mr={2} />
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        <PropertyCard
          imageUrl="/property1.jpg"
          title="Casa en venta"
          location="Calle Principal, Ciudad"
          price="$250,000"
        />
        <PropertyCard
          imageUrl="/property2.jpg"
          title="Departamento en alquiler"
          location="Avenida Central, Ciudad"
          price="$1,200/mes"
        />
        <PropertyCard
          imageUrl="/property3.jpg"
          title="Terreno en venta"
          location="Barrio Residencial, Ciudad"
          price="$150,000"
        />
      </SimpleGrid>
    </Box>
  );
};

const PropertyCard = ({ imageUrl, title, location, price }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <Image src={imageUrl} alt="Property" />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" mb={2}>
          {location}
        </Text>
        <Flex alignItems="center">
          <Text fontWeight="bold" fontSize="lg" mr={2}>
            {price}
          </Text>
          <Badge colorScheme="green">Disponible</Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default Casas;
