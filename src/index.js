import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes/public';
import ReactDOM from "react-dom";
import WhatsAppButton from './components/whatsap';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <AppRoutes />
    <WhatsAppButton />
  </ChakraProvider>
);

