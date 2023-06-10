import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { useEffect, useState } from 'react';
import Bar from '../components/bar';
import Navbar from '../components/navbar';


import { Box, Flex, Heading, Text, Image,SimpleGrid,IconButton } from '@chakra-ui/react';
import Formik1 from '../components/form';


const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const getPropertyDetails = async () => {
      const propertyRef = doc(db, 'venta', id);
      const propertyDoc = await getDoc(propertyRef);

      if (propertyDoc.exists()) {
        setProperty(propertyDoc.data());
      } else {
        // Manejo de propiedad no encontrada
      }
    };

    getPropertyDetails();
  }, [id]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? property.images.length - 1 : prevIndex - 1));
  };
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === property.images.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <Box p={4}>
        <Navbar/>
      {property ? (
         <Flex maxW="1000px"  mx="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
         <Box mr={4}>
              <Box mb={4} position="relative">
        <Image
          src={property.images[currentImageIndex]}
          alt="Main Image"
          boxSize="400px"
          objectFit="cover"
          borderRadius="md"
        />
        <Flex justifyContent="space-between" position="absolute" top="50%" w="100%">
          <span
          //  icon={<ChevronLeftIcon />}

          style={{ fontSize: '40px', cursor: 'pointer' }}
            colorScheme="gray"
            onClick={goToPreviousImage}
            disabled={currentImageIndex === 0}
            aria-label="Previous Image"
          >
            &lt;
            </span>
          <span
            style={{ fontSize: '40px', cursor: 'pointer' }}
            onClick={goToNextImage}
            disabled={currentImageIndex === property.images.length - 1}
            aria-label="Next Image"
            >
            &gt;
            </span>

        </Flex>
      </Box>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {property.images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            boxSize="100px"
            objectFit="cover"
            borderRadius="md"
            opacity={index === currentImageIndex ? 1 : 0.6}
            cursor="pointer"
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </SimpleGrid>
         </Box>
         <Box>
           <Heading as="h2" size="xl" mb={4}>{property.title}</Heading>
           <Text fontSize="lg" mb={2}>{property.location}</Text>
           <Text fontSize="lg" mb={2}>{property.price}</Text>
           {/* Agregar más detalles de la propiedad */}
         </Box>
         <Formik1/>
       </Flex>
     ) : (
       <Text>Cargando...</Text>
     )}
     
            <Bar/>
    </Box>
  );
};

export default PropertyDetailsPage;




