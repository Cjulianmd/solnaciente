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
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        <PropertyCard
          imageUrl="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/336039742_3544539622532810_738943150359978152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=onVKpYpc6b4AX9cIqhj&_nc_ht=scontent.feoh3-1.fna&oh=00_AfCiIilhkVW2IB_x0P5Z5V48DXeE_Eq0g1O7xrdh-8pKuw&oe=6488E00E"
          title="Casa en venta"
          location="Calle Principal, Ciudad"
          price="$250,000"
        />
        <PropertyCard
          imageUrl="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/336039742_3544539622532810_738943150359978152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=onVKpYpc6b4AX9cIqhj&_nc_ht=scontent.feoh3-1.fna&oh=00_AfCiIilhkVW2IB_x0P5Z5V48DXeE_Eq0g1O7xrdh-8pKuw&oe=6488E00E"
          title="Departamento en alquiler"
          location="Avenida Central, Ciudad"
          price="$1,200/mes"
        />
        <PropertyCard
          imageUrl="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/336039742_3544539622532810_738943150359978152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=onVKpYpc6b4AX9cIqhj&_nc_ht=scontent.feoh3-1.fna&oh=00_AfCiIilhkVW2IB_x0P5Z5V48DXeE_Eq0g1O7xrdh-8pKuw&oe=6488E00E"
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
