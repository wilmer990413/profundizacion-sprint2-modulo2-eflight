import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AppStateProvider } from "./context/AppStateContext"; // Importa el AppStateProvider

import NavRoutes from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";
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
