import { useEffect, useState } from 'react';
import { Box, Flex, SimpleGrid, Image, Heading, Text, Badge } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/firebase"
import { Link } from 'react-router-dom';

const Casasventa = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Obtener la referencia a la colección "properties" de Firestore
    const propertiesCollection = collection(db, 'venta');

    // Obtener los documentos de la colección
    const fetchProperties = async () => {
      const querySnapshot = await getDocs(propertiesCollection);
      const propertiesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProperties(propertiesData);
    };

    // Ejecutar la función de obtención de datos
    fetchProperties();
  }, []);

  const handlePropertyClick = (propertyId) => {
    console.log('ID de la propiedad:', propertyId);
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing={4}>
      {properties
  .filter((property) => property.tipo === 'venta' && property.dis === 'Disponible')
  .map((property) => (
    <Link to={`/${property.id}`} key={property.id}>
      <PropertyCard
        imageUrl={property.images[0]}
        title={property.title}
        location={property.location}
        price={property.price}
        propertyId={property.id} // Agregar la prop 'propertyId'
      />
    </Link>
  ))
}
      </SimpleGrid>
    </Box>
  );
};

const PropertyCard = ({ imageUrl, title, location, price,dis }) => {
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
          <Badge colorScheme="green">{dis}</Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default Casasventa;
