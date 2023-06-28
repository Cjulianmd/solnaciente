import { useEffect, useState } from 'react';
import { Box, Flex, SimpleGrid, Image, Heading, Text, Badge } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/firebase"
import { Link } from 'react-router-dom';
import { logEvent, getAnalytics } from 'firebase/analytics'; // Importar las funciones de Firebase Analytics

const Casasventa = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const propertiesCollection = collection(db, 'venta');

    const fetchProperties = async () => {
      const querySnapshot = await getDocs(propertiesCollection);
      const propertiesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProperties(propertiesData);
    };

    fetchProperties();
  }, []);

  const handlePropertyClick = (propertyId) => {
    const analytics = getAnalytics();
    logEvent(analytics, 'property_view', { propertyId });
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing={4}>
        {properties
          .filter((property) => property.tipo === 'venta' && property.dis === 'Disponible')
          .map((property) => (
            <Link to={`/${property.id}`} key={property.id} onClick={() => handlePropertyClick(property.id)}>
              <PropertyCard
                imageUrl={property.images[0]}
                title={property.title}
                location={property.location}
                price={property.price}
                dis={property.dis}
                propertyId={property.id}
              />
            </Link>
          ))
        }
      </SimpleGrid>
    </Box>
  );
};

const PropertyCard = ({ imageUrl, title, location, price, dis }) => {
  const badgeColorScheme = dis === 'Disponible' ? 'green' : 'red';
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
          <Badge colorScheme={badgeColorScheme}>{dis}</Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default Casasventa;
