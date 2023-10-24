import React from "react";
import InputWithValidation from "../input/InputWithValidation";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Title from "../title/Title";
import "./FromPayments.css";
import SelectWithValidation from "../select/SelectWithValidation";
import { Button, Checkbox } from "@chakra-ui/react";

const FromPayments = () => {
  return (
    <form className="form" style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="title">MyBoking</h1>
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
          name="Name on card"
          width="300px"
          placeholder="Enter name on card"
        />
        <InputWithValidation
          label="Card number"
          type="text"
          name="Card number"
          width="300px"
          placeholder="Enter card number"
        />
      </div>
      <div className="cont">
        <SelectWithValidation
          label="Expiration date"
          name="Title"
          options={["Selects", "United Arab Emirates", "Nigeria"]}
          width="300px"
          placeholder="input Texto"
        />
        <InputWithValidation
          label="CVV"
          type="text"
          name="CVV"
          width="300px"
          placeholder="Enter CVV"
        />
      </div>
      <Checkbox defaultChecked>Use same address as billing info</Checkbox>
      <InputWithValidation
        label="Address"
        type="text"
        name="Address"
        width="100%"
        placeholder="Add address"
      />
      <div className="cont">
        <InputWithValidation
          label="Zip/Postal code"
          type="text"
          name="Address"
          width="300px"
          placeholder="Zip/Postal code"
        />
        <SelectWithValidation
          label="Nationality"
          name="Title"
          options={["Selects", "United Arab Emirates", "Nigeria"]}
          width="300px"
          placeholder="Select"
        />
      </div>
      <Button colorScheme="green"> Enviar</Button>
    </form>
  );
};

export default c;
