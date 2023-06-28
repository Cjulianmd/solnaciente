import React, { useEffect, useState, useRef } from 'react';
import { Box, Heading, Text, Flex, Image, Badge} from '@chakra-ui/react';
import { db } from "../firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { logEvent, getAnalytics } from 'firebase/analytics'; // Importar las funciones de Firebase Analytics

const Casas = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'venta'));
        const fetchedProperties = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(fetchedProperties);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [properties]);

  if (loading) {
    return <p>Cargando propiedades...</p>;
  }

  if (error) {
    return <p>Error al cargar las propiedades: {error}</p>;
  }

  const visibleProperties = showMore ? properties : properties.slice(0, 3);

  const handlePropertyClick = (propertyId) => {
    const analytics = getAnalytics();
    logEvent(analytics, 'property_view', { propertyId });
  };

  return (
    <Box p={4}>
      <Flex overflowX="auto" ref={scrollRef}>
        {visibleProperties.map((property, index) => (
          <Link to={`/${property.id}`} key={property.id} onClick={() => handlePropertyClick(property.id)}>
            <PropertyCard
              imageUrl={property.images[0]}
              title={property.title}
              location={property.location}
              price={property.price}
              dis={property.dis}
              isFirstCard={index === 0}
            />
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

const PropertyCard = ({ imageUrl, title, location, price, isFirstCard,dis }) => {
  const badgeColorScheme = dis === 'Disponible' ? 'green' : 'red';
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      mr={isFirstCard ? 0 : 4}
    >
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

export default Casas;
