import { Box } from '@chakra-ui/react';
import Casasventa from '../components/casaventa';
import Navbar from '../components/navbar';
import Bar from '../components/bar';

const Ventas = () => {
  return (
    <Box>
        <Navbar/>
      <Casasventa/>
      <Bar/>
    </Box>
  );
};

export default Ventas;