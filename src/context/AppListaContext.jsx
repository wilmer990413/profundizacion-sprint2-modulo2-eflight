import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [detallesPrecio, setDetallesPrecio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/vuelos")
      .then((response) => {
        const data = response.data;
        const detallesPrecio = data[0].detalles_precio;
        setDetallesPrecio(detallesPrecio);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ detallesPrecio, loading }}>
      {children}
    </ApiContext.Provider>
  );
};
