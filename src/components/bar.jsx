import {
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Stack,
  Text,
  Image,
  Box
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logEvent, getAnalytics } from 'firebase/analytics'; // Importar las funciones de Firebase Analytics

  const Bar = () => {
  const handleInstagramClick = () => {
    // Abrir el enlace de Instagram en una nueva pestaña
    window.open('https://www.instagram.com/fincaraizsolnaciente/', '_blank');

    // Registrar el evento de clic en el ícono de Instagram en Firebase Analytics
    const analytics = getAnalytics();
    logEvent(analytics, 'instagram_icon_click');
  };

  const handleFacebookClick = () => {
    // Abrir el enlace de Facebook en una nueva pestaña
    window.open('https://www.facebook.com/solnaciente.fincaraiz.94', '_blank');

    // Registrar el evento de clic en el ícono de Facebook en Firebase Analytics
    const analytics = getAnalytics();
    logEvent(analytics, 'facebook_icon_click');
  };

  return (
  
    <Box as="footer" role="contentinfo" boxShadow="0px 2px 4px rgba(0, 0, 0, .2)" >
 <Stack
      spacing="40"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      py={{ base: '2', md: '5' }}
    >
      <Stack spacing={{ base: '6', md: '8' }} align="start">
      <Image src="https://firebasestorage.googleapis.com/v0/b/sol-naciente-6024f.appspot.com/o/289632153_723889605531525_1739308940766759541_n-removebg-preview.png?alt=media&token=26fc120e-53e3-41e7-8010-186c03e47324" alt="Logo" boxSize="150px" mr={3} />
        
      </Stack>
      
      <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="fg.subtle">
              contactanos
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="text" colorScheme="gray">
                3136426338
              </Button>
              <Button variant="text" colorScheme="gray">
                3147171818
              </Button>
              <Button variant="text" colorScheme="gray">
                fincaraizsolnaaciente@gmail.com
              </Button>
            </Stack>
          </Stack>

      <Stack
        direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
        spacing={{ base: '12', md: '8' }}
      >
        
        <Stack direction="row" spacing="8">

          <Stack spacing="4" minW="60" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="fg.subtle">
              Servicios
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="text" colorScheme="gray">
                Venta
              </Button>
              <Button variant="text" colorScheme="gray">
                Arrendamiento
              </Button>
            </Stack>
          </Stack>

          <Stack spacing="4" minW="80" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="fg.subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>/term
            <Link to="/term" style={{ textDecoration: 'none' }}>
            <Button variant="text" colorScheme="gray">
              Terms and Privacy
            </Button>
          </Link>
              <Button variant="text" colorScheme="gray">
                License
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="5"
      pb="5"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
    >
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Sol naciente, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="tertiary">
        <IconButton
          as="a"
          href="https://www.instagram.com/fincaraizsolnaciente/"
          aria-label="Instagram"
          icon={<FaInstagram fontSize="1.25rem" />}
          onClick={handleInstagramClick}
        />
        <IconButton
          as="a"
          href="https://www.facebook.com/solnaciente.fincaraiz.94"
          aria-label="Facebook"
          icon={<FaFacebook fontSize="1.25rem" />}
          onClick={handleFacebookClick}
        />
      </ButtonGroup>
    </Stack>
    </Box>
   );
  };



  export default Bar;