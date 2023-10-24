import React from "react";
import useFormData from "../../Hooks/useForm";
import { AddIcon } from "@chakra-ui/icons";
import "./Form.css";
import Title from "../title/Title";
import InputWithValidation from "../input/InputWithValidation";
import SelectWithValidation from "../select/SelectWithValidation";
import { Link } from "react-router-dom";

function Formulario() {
  const { formData, handleInputChange, submitForm } = useFormData();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <>
      <h2>Home</h2>
      <form
        className="form"
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="cont">
          <InputWithValidation
            label="Nombre"
            type="text"
            name="nombre"
            onChange={handleInputChange}
            width="300px"
            placeholder="Texto"
            value={formData.nombre}
          />

          <InputWithValidation
            label="Surname"
            type="text"
            name="Surname"
            onChange={handleInputChange}
            width="300px"
            placeholder="Texto"
            value={formData.Surname}
          />
        </div>
        <div className="cont">
          <SelectWithValidation
            label="Title"
            name="Title"
            onChange={handleInputChange}
            options={["Selects", "United Arab Emirates", "Nigeria"]}
            width="200px"
            placeholder="input Texto"
            value={formData.Title}
          />
          <InputWithValidation
            label="Fecha de Nacimiento"
            type="date"
            name="birthDate"
            onChange={handleInputChange}
            width="200px"
            placeholder="input Texto"
            value={formData.birthDate}
          />
          <SelectWithValidation
            label="Country"
            name="country"
            onChange={handleInputChange}
            options={["Selects", "United Arab Emirates", "Nigeria"]}
            width="200px"
            placeholder="input Texto"
            value={formData.country}
          />
        </div>
        <Title
          iconName={AddIcon}
          text="Identidad"
          iconColor="blue.500"
          textColor="blue.500"
        />
        <InputWithValidation
          label="passportNumber"
          type="text"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleInputChange}
          width="600px"
          placeholder="Texto"
        />
        <div className="cont">
          <SelectWithValidation
            label="countryIssue"
            name="countryIssue"
            value={formData.countryIssue}
            onChange={handleInputChange}
            options={["United Arab Emirates", "Nigeria"]}
            width="300px"
            placeholder="input Texto"
          />
          <InputWithValidation
            label="passportDate"
            type="date"
            name="passportDate"
            value={formData.passportDate}
            onChange={handleInputChange}
            width="300px"
            placeholder="input Texto"
          />
        </div>
        <Title
          iconName={AddIcon}
          text="Contact details"
          iconColor="blue.500"
          textColor="blue.500"
        />
        <div className="cont">
          <InputWithValidation
            label="Nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            width="300px"
            placeholder="Texto"
          />

          <InputWithValidation
            label="Surname"
            type="text"
            name="Surname"
            value={formData.Surname}
            onChange={handleInputChange}
            width="300px"
            placeholder="Texto"
          />
        </div>
        <div className="cont">
          <SelectWithValidation
            label="Title"
            name="Title"
            value={formData.country}
            onChange={handleInputChange}
            options={["Selects", "United Arab Emirates", "Nigeria"]}
            width="200px"
            placeholder="input Texto"
          />
          <InputWithValidation
            label="Fecha de Nacimiento"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            width="200px"
            placeholder="input Texto"
          />
          <InputWithValidation
            label="phoneNumber"
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            width="200px"
            placeholder="Texto"
          />
        </div>

        <button type="submit">
          <Link to="/Payments">Mostrar Datos</Link>
        </button>
      </form>
    </>
  );
}

export default Formulario;
