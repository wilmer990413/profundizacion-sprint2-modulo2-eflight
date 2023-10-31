import React, { useEffect, useState } from "react";
import InputWithValidation from "../input/InputWithValidation";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Title from "../title/Title";
import "./FromPayments.css";
import SelectWithValidation from "../select/SelectWithValidation";
import { Button, Checkbox } from "@chakra-ui/react";

const FromPayments = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [formData, setFormData] = useState({
    NameOnCard: "",
    CardNumber: "",
    ExpirationDate: "Selects",
    CVV: "",
    // Otros campos
  });

  useEffect(() => {
    // Cargar los métodos de pago desde el servidor JSON
    fetch("http://localhost:3001/metodos_de_pago")
      .then((response) => response.json())
      .then((data) => setPaymentMethods(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía el formulario con los datos a tu servidor o realiza las acciones necesarias.
    console.log("Formulario enviado:", formData);
  };

  return (
    <form
      className="form"
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <h1 className="title">MyBooking</h1>
      <Title
        text="Payment method"
        iconColor="blue.500"
        textColor="blue.500"
        textSize="30px"
      />
      <div className="cont">
        <InputWithValidation
          label="Name on card"
          type="text"
          name="NameOnCard"
          onChange={handleInputChange}
          width="300px"
          placeholder="Enter name on card"
          value={formData.NameOnCard}
        />
        <InputWithValidation
          label="Card number"
          type="text"
          name="CardNumber"
          onChange={handleInputChange}
          width="300px"
          placeholder="Enter card number"
          value={formData.CardNumber}
        />
      </div>
      <div className="cont">
        <SelectWithValidation
          label="Expiration date"
          name="ExpirationDate"
          options={["Selects", ...paymentMethods.map((method) => method.tipo)]}
          width="300px"
          placeholder="Select payment method"
          value={formData.ExpirationDate}
          onChange={handleInputChange}
        />
        <InputWithValidation
          label="CVV"
          type="text"
          name="CVV"
          onChange={handleInputChange}
          width="300px"
          placeholder="Enter CVV"
          value={formData.CVV}
        />
      </div>
      <Checkbox defaultChecked>Use the same address as billing info</Checkbox>
      <Button type="submit" colorScheme="green">
        Enviar
      </Button>
    </form>
  );
};

export default FromPayments;
