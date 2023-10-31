import React from 'react';
import ReactDOM from 'react-dom/client';
import NavRoutes from './routes/routes.jsx';
import {ChakraProvider} from '@chakra-ui/react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom";
import { AppStateProvider } from "./context/AppStateContext";
import { ApiProvider } from "./context/AppListaContext";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <ApiProvider>
        <AppStateProvider>
          <NavRoutes />
        </AppStateProvider>
      </ApiProvider>
    </Router>
  </ChakraProvider>,

  document.getElementById("root")
);
