import React from "react";
import Lista from "../../components/lista/Lista";
import FromPayments from "../../components/FromPayments/FromPayments";
import "./Payments.css";

const Payments = () => {
  return (
    <div className="FromPayments-container">
      <div className="FromPayments-container">
        <FromPayments />
      </div>
      <div className="listaFromPayments-container">
        <Lista />
      </div>
    </div>
  );
};

export default Payments;
