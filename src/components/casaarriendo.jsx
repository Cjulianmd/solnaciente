import { useEffect, useState } from 'react';
import { Box, Flex, SimpleGrid, Image, Heading, Text, Badge } from '@chakra-ui/react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Casas = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Obtener la referencia a la colección "properties" de Firestore
    const db = getFirestore();
    const propertiesCollection = collection(db, 'properties');

    // Obtener los documentos de la colección
    const fetchProperties = async () => {
      const querySnapshot = await getDocs(propertiesCollection);
      const propertiesData = querySnapshot.docs.map((doc) => doc.data());
      setProperties(propertiesData);
    };

    // Ejecutar la función de obtención de datos
    fetchProperties();
  }, []);

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            imageUrl={property.imageUrl}
            title={property.title}
            location={property.location}
            price={property.price}
          />
        ))}
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
