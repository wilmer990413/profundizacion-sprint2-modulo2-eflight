import { useState } from "react";
import axios from "axios";

const useFormData = () => {
  const initialFormState = {
    nombre: "",
    Surname: "",
    Title: "",
    birthDate: "",
    country: "Selects",
    passportNumber: "",
    countryIssue: "Selects",
    passportDate: "",
    phoneNumber: "",
    Email: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/tickets/", formData);
      console.log("Datos guardados en el servidor:", response.data);
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  return { formData, handleInputChange, submitForm };
};

export default useFormData;
