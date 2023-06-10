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
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
      navigate(path);
    };
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '1', md: '30' }}>

        <Box as="nav" bg="bg.surface" boxShadow="sm">          
          <Container>
            <Flex alignItems="center">
                <Image src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/336039742_3544539622532810_738943150359978152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=onVKpYpc6b4AX9cIqhj&_nc_ht=scontent.feoh3-1.fna&oh=00_AfCiIilhkVW2IB_x0P5Z5V48DXeE_Eq0g1O7xrdh-8pKuw&oe=6488E00E" alt="Logo" boxSize="150px" mr={3} />
                <Heading as="h1" size="xl">
                    finca raiz
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
            <Button key={item.label} onClick={() => handleButtonClick(item.path)}>
              {item.label}
            </Button>
          ))}
        </ButtonGroup>
                </Flex>
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }

  export default Navbar;