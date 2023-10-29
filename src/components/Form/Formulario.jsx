import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Title from "../title/Title";
import InputWithValidation from "../input/InputWithValidation";
import SelectWithValidation from "../select/SelectWithValidation";
import CustomAlert from "../alert/CustomAlert";
import useFormData from "../../Hooks/useForm";
import { InfoOutlineIcon, ViewIcon } from "@chakra-ui/icons";

function Formulario() {
  const { submitForm } = useFormData();

  return (
    <>
      <form
        className="form"
        onSubmit={submitForm}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1>MyBoking</h1>
        <Title
          iconName={InfoOutlineIcon}
          text="Passenger details"
          iconColor="blue.500"
          textColor="blue.500"
          textSize="30px"
        />
        <p style={{ color: "#565E6C" }}>
          Name as on ID card/passport without title and punctuation
        </p>

        <div className="cont">
          <InputWithValidation
            label="Nombre"
            type="text"
            name="nombre"
            width="300px"
            placeholder="Input Text"
          />

          <InputWithValidation
            label="Surname"
            type="text"
            name="Surname"
            width="300px"
            placeholder="Input Text"
          />
        </div>
        <div className="cont">
          <SelectWithValidation
            label="Title"
            name="Title"
            options={["Selects", "United Arab Emirates", "Nigeria"]}
            width="200px"
            placeholder="Input Texto"
          />
          <InputWithValidation
            label="Fecha de Nacimiento"
            type="date"
            name="birthDate"
            width="200px"
            placeholder="Input Texto"
          />
          <SelectWithValidation
            label="Country"
            name="country"
            options={["Selects", "United Arab Emirates", "Nigeria"]}
            width="200px"
            placeholder="Input Texto"
          />
        </div>
        <Title
          iconName={ViewIcon}
          text="Identity"
          iconColor="blue.500"
          textColor="blue.500"
          textSize="30px"
        />
        <CustomAlert />
        <InputWithValidation
          label="passport Number"
          type="text"
          name="passportNumber"
          width="600px"
          placeholder="Input text"
        />
        <div className="cont">
          <SelectWithValidation
            label="Country of Issue"
            name="countryIssue"
            options={["United Arab Emirates", "Nigeria"]}
            width="300px"
            placeholder="input Texto"
          />
          <InputWithValidation
            label="Passport Expiry Date"
            type="date"
            name="passportDate"
            width="300px"
            placeholder="Passport Expiry Date"
          />
        </div>
        <Title text="Contact details" textColor="blue.500" textSize="30px" />

        <div className="cont">
          <InputWithValidation
            label="Nombre"
            type="text"
            name="nombre"
            width="300px"
            placeholder="Input text"
          />

          <InputWithValidation
            label="Surname"
            type="text"
            name="Surname"
            width="300px"
            placeholder="Input text"
          />
        </div>
        <div className="cont">
          <SelectWithValidation
            label="Title"
            name="Title"
            options={["Selects", "United Arab Emirates", "Nigeria"]}
            width="200px"
            placeholder="input Texto"
          />
          <InputWithValidation
            label="Email"
            type="Email"
            name="Email"
            width="200px"
            placeholder="Input text"
          />
          <InputWithValidation
            label="Phone number"
            type="numero"
            name="phoneNumber"
            width="200px"
            placeholder="Input text"
          />
        </div>
        <Link to="/payments">
          <Button colorScheme="green" w="100%">
            Enviar
          </Button>
        </Link>
      </form>
    </>
  );
}

export default Formulario;
