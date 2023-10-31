import React, { useState, useEffect } from "react";
import Columna from "../columna/Columna";
import { useApi } from "../../context/AppListaContext";
import "./Lista.css";

const Lista = () => {
  const [detallesPrecio, setDetallesPrecio] = useState(null);
  const { flight } = useApi();
  console.log(flight);
  useEffect(() => {
    const detallesPrecio = flight.detalles_precio;
    setDetallesPrecio(detallesPrecio);
  }, []);

  if (!detallesPrecio) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="div">
      <h1 className="h1">Price details</h1>
      <hr />
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
        valor={`-$${detallesPrecio.ahorro}`}
        colorTextoLeft="orange"
        colorTextoRight="orange"
      />
      <hr />
      <Columna
        label="total"
        valor={`$${detallesPrecio.precio}`}
        colorTextoRight="green"
      />
    </div>
  );
};

export default Lista;
