import React, { useState, useEffect } from "react";
import Columna from "../columna/Columna";

const Lista = () => {
  const [detallesPrecio, setDetallesPrecio] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/vuelos")
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
      <hr />
      <Columna
        label="Básica para Adultos"
        valor={`${detallesPrecio.tarifa_basica_adultos}`}
        colorTextoLeft="blue"
        colorTextoRight="red"
      />
      <Columna
        label="Impuesto"
        valor={`${detallesPrecio.precio}`}
        colorTextoLeft="blue"
        colorTextoRight="red"
      />
      <Columna
        label="Precio Total Regular"
        valor={`${detallesPrecio.precio_total_regular}`}
        colorTextoLeft="blue"
        colorTextoRight="red"
      />
      <Columna
        label="Ahorro"
        valor={`${detallesPrecio.ahorro}`}
        colorTextoLeft="blue"
        colorTextoRight="red"
      />
      <Columna
        label="total"
        valor={`${detallesPrecio.precio}`}
        colorTextoLeft="blue"
        colorTextoRight="red"
      />
    </div>
  );
};

export default Lista;
