import { useState } from "react";
import axios from "axios";

const useFormData = () => {
  const initialFormState = {
    nombre: "",
    Surname: "",
    Title: "Selects",
    birthDate: "",
    country: "Selects",
    passportNumber: "",
    countryIssue: "Selects",
    passportDate: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    if (formData.nombre && formData.Surname && formData.country) {
      // Realizar una solicitud POST al servidor JSON con Axios
      axios
        .post("http://localhost:301/tickets", formData)
        .then((response) => {
          console.log("Datos guardados en el servidor:", response.data);
        })
        .catch((error) => {
          console.error("Error al guardar los datos:", error);
        });
    }
  };

  return { formData, handleInputChange, submitForm };
};

export default useFormData;
