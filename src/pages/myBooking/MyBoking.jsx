import React from "react";

import "./MyBooking.css"; // Importa el archivo CSS para estilizar el componente
import Formulario from "../../components/Form/Formulario";
import Lista from "../../components/lista/Lista";

const MyBooking = () => {
  return (
    <>
      <div className="my-booking-container">
        <div className="Formulario-container">
          <Formulario />
        </div>
        <div className="lista-container">
          <Lista />
        </div>
      </div>
    </>
  );
};

export default MyBooking;
