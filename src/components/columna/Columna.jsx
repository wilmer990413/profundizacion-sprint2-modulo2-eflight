import React from "react";
import "./Columna.css";

const Columna = (props) => {
  const columnaLeftStyle = {
    color: props.colorTextoLeft,
  };

  const columnaRightStyle = {
    color: props.colorTextoRight,
  };

  return (
    <div className="contenedor">
      <div className="columna-left" style={columnaLeftStyle}>
        {props.label}
      </div>
      <div className="columna-right" style={columnaRightStyle}>
        {props.valor}
      </div>
    </div>
  );
};

export default Columna;
