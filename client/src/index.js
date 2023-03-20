import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Pages/App';
import './Fonts/Bolkit-Alternate-Bold.ttf';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
