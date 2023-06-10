import { Box } from '@chakra-ui/react';
import Casaarriendo from '../components/casaarriendo';
import Navbar from '../components/navbar';
import Bar from '../components/bar';

const Ventas = () => {
  return (
    <Box>
        <Navbar/>
      <Casaarriendo/>
      <Bar/>
    </Box>
  );
};

export default Ventas;