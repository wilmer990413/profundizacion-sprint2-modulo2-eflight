import React from 'react'
import ReactDOM from 'react-dom/client'
import NavRoutes from './routes/routes.jsx';
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <NavRoutes /> 
    </BrowserRouter>
  </ChakraProvider>
  ,
)
