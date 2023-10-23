import React from 'react'
import ReactDOM from 'react-dom/client'
import NavRoutes from './routes/routes.jsx';
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './pages/login/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
