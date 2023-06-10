import React, { useEffect, useState, useRef } from 'react';
import { Box, Heading, Text, Flex, Image, Badge, Button } from '@chakra-ui/react';
import { db } from "../firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';

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

  return (
    <Box p={4}>
      <Flex overflowX="auto" ref={scrollRef}>
        {visibleProperties.map((property, index) => (
          <PropertyCard
            key={property.id}
            imageUrl={property.images[0]}
            title={property.title}
            location={property.location}
            price={property.price}
            isFirstCard={index === 0}
          />
        ))}
      </Flex>
      {!showMore && properties.length > 3 && (
        <Button mt={4} onClick={() => setShowMore(true)}>
          Ver más propiedades
        </Button>
      )}
    </Box>
  );
};

const PropertyCard = ({ imageUrl, title, location, price, isFirstCard }) => {
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
          <Badge colorScheme="green">Disponible</Badge>
        </Flex>
      </Box>
    </Box>
  );
};

export default Casas;
