import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase/firebase";
import { useEffect, useState } from 'react';
import Bar from '../components/bar';
import Navbar from '../components/navbar';
import { Box, Flex, Heading, Text, Image, SimpleGrid, IconButton } from '@chakra-ui/react';
import Formik1 from '../components/form';
import { FaBath, FaUtensils, FaCar, FaBed, FaCouch, FaTshirt, FaRuler, FaBuilding, FaCoins, FaInfo, FaLayerGroup,FaMapMarkerAlt,FaHome } from 'react-icons/fa';


const PropertyDetailsPage = () => {
  const { id} = useParams();
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
      <Navbar />


      <Box maxW="800px" mx="auto" mt={8}>
        <Heading as="h2" size="xl" mb={4}>
          {property?.title}
        </Heading>
      </Box>



      {property ? (
        <Flex maxW="1200px" mx="auto" mt={4} boxShadow="lg" borderRadius="md" overflow="hidden">
          <Box flex="1" mr={4}>
            <Box mb={4} position="relative">
              <Image
                src={property.images[currentImageIndex]}
                alt="Main Image"
                boxSize="600px"
                objectFit="cover"
                borderRadius="md"
              />
              <Flex justifyContent="space-between" position="absolute" top="50%" w="100%">
                <span
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
          <Formik1 />
        </Flex>
      ) : (
        <Text>Cargando...</Text>
      )}
      <Box boxShadow="0px 2px 4px rgba(0, 0, 0, .2)" maxW="800px" mx="auto" mt={8}>
      <Flex maxW="1000px" mx="auto" boxShadow="lg" borderRadius="md" overflow="hidden">
          <Box  p={4} display="flex" flexDirection="column" alignItems="flex-start">
            <Heading as="h2" size="xl" mb={4}>
            Características
            </Heading>

            <Flex alignItems="center" mb={4}>
              <FaBuilding size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Sector: {property?.location}
              </Text>
              <Box width={150} />
              <FaCoins size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Precio: {property?.price}
              </Text>
              </Flex>


            <Flex alignItems="center" mb={4}>
              <FaBath size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Baños: {property?.baños}
              </Text>
              <Box width={210} />
              <FaUtensils size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Cocina: {property?.cocina}
              </Text>
              </Flex>


            <Flex alignItems="center" mb={4}>
              <FaCar size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Garaje: {property?.garaje}
              </Text>
              <Box width={210} />
              <FaBed size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Habitaciones: {property?.habitaciones}
              </Text>
              </Flex>


            <Flex alignItems="center" mb={4}>
              <FaCouch size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Sala/Comedor: {property?.salaparacomedor}
              </Text>
              <Box width={150} />
              <FaTshirt size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Zona de Ropa: {property?.zonaderopa}
              </Text>
              </Flex>


              <Flex alignItems="center" mb={4}>
              <FaRuler size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Metros:{property?.metros}
              </Text>
              <Box width={190} />
              <FaLayerGroup size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Pisos: {property?.pisos}
              </Text>
            </Flex>





            <Flex alignItems="center" mb={4}>
              <FaTshirt size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Closets: {property?.closets}
              </Text>
              <Box width={215} />
              <FaBuilding size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Tipo de Inmueble: {property?.tipodeinmueble}
              </Text>
              </Flex>


            <Flex alignItems="center" mb={4}>
              <FaBuilding size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Estrato: {property?.estrato}
              </Text>
              <Box width={210} />
              <FaBuilding size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Administración: {property?.administracion}
              </Text>
            </Flex>

            <Flex alignItems="center" mb={4}>
            <FaMapMarkerAlt size={20} color="#888" />
            <Text fontSize="lg" mb={2}>
              Sector:   {property?.location}
            </Text>
            <Box width={150} />
            <FaHome size={20} color="#888" />
            <Text fontSize="lg" mb={4}>
              Casa en:   {property?.tipo}
            </Text>
          </Flex>




            <Flex alignItems="center" mb={4}>
              <FaInfo size={20} color="#888" />
              <Text fontSize="lg" ml={2}>
                Información adicional: {property?.informacion}
              </Text>
            </Flex>


          </Box>

          </Flex>
      </Box>
      <Bar />
    </Box>
  );
};

export default PropertyDetailsPage;
