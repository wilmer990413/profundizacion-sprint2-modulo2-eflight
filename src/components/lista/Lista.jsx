import React, { useState, useEffect } from "react";
import Columna from "../columna/Columna";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const Lista = () => {
  const [detallesPrecio, setDetallesPrecio] = useState(null);

  useEffect(() => {
    fetch("https://miniback-books-app-i9fd.onrender.com/vuelos")
      .then((response) => response.json())
      .then((data) => {
        const detallesPrecio = data[0].detalles_precio;
        setDetallesPrecio(detallesPrecio);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
  }, []);

  if (!detallesPrecio) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Columna
        label="Básica para Adultos"
        valor={`$${detallesPrecio.tarifa_basica_adultos}`}
      />
      <Columna label="Impuesto" valor={`$${detallesPrecio.precio}`} />
      <Columna
        label="Precio Total Regular"
        valor={`$${detallesPrecio.precio_total_regular}`}
      />
      <Columna
        label="Ahorro"
        valor={`$${detallesPrecio.ahorro}`}
        colorTextoLeft="blue"
        colorTextoRight="red"
      />
      <Columna
        label="total"
        valor={`$${detallesPrecio.precio}`}
        colorTextoLeft="blue"
        colorTextoRight="red"
      />
    </div>
  );
};

export default Lista;
