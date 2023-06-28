import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Heading,
  Image,
  Spacer,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { logEvent, getAnalytics } from 'firebase/analytics'; // Importar las funciones de Firebase Analytics

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);

    // Registrar el evento de botón de navegación en Firebase Analytics
    const analytics = getAnalytics();
    logEvent(analytics, 'navigation_button_click', {
      path: path,
    });
  };

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box as="section" pb={{ base: '1', md: '30' }}>
      <Box as="nav" bg="bg.surface" boxShadow="sm">
        <Container>
          <Flex alignItems="center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/289632153_723889605531525_1739308940766759541_n-removebg-preview.png?alt=media&token=26fc120e-53e3-41e7-8010-186c03e47324"
              alt="Logo"
              boxSize="150px"
              mr={3}
            />
            <Heading as="h1" size="xl">
              Finca raíz
            </Heading>
            <Spacer />
          </Flex>
          <HStack spacing="10" justify="space-between">
            <Flex justify="space-between" flex="1">
              <ButtonGroup variant="text" colorScheme="gray" spacing="8">
                {[
                  { label: 'inicio', path: '/' },
                  { label: 'Ventas', path: '/Ventas' },
                  { label: 'Arrendamientos', path: '/Arrendamientos' },
                  { label: 'contacto', path: '/contacto' },
                ].map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleButtonClick(item.path)}
                  >
                    {item.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
