import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Input,
    Stack,
    Text,
    Flex,
    Image,
    Spacer,
    Heading,
    Box
  } from '@chakra-ui/react'
 
  
const Bar = () => (
    <Box as="footer" role="contentinfo" boxShadow="0px 2px 4px rgba(0, 0, 0, .2)" >
 <Stack
      spacing="40"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      py={{ base: '2', md: '5' }}
    >
      <Stack spacing={{ base: '6', md: '8' }} align="start">
      <Image src="https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/336039742_3544539622532810_738943150359978152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=onVKpYpc6b4AX9cIqhj&_nc_ht=scontent.feoh3-1.fna&oh=00_AfCiIilhkVW2IB_x0P5Z5V48DXeE_Eq0g1O7xrdh-8pKuw&oe=6488E00E" alt="Logo" boxSize="150px" mr={3} />
        
      </Stack>
      
      <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="fg.subtle">
              contactanos
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="text" colorScheme="gray">
                telefono
              </Button>
              <Button variant="text" colorScheme="gray">
                telefono 2
              </Button>
              <Button variant="text" colorScheme="gray">
                correo electronico
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
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="text" colorScheme="gray">
                Terms and Privacy
              </Button>
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
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="tertiary">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
        //  icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton as="a" href="#" aria-label="GitHub"  />
        <IconButton as="a" href="#" aria-label="Twitter"  />
      </ButtonGroup>
    </Stack>
    </Box>
  )



  export default Bar;