import { useState } from "react";
import axios from "axios";

const useFromDataLista = () => {
  const initialFormState = {
    campo1: "",
    campo2: "",
    campo3: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitFromDataLista = () => {
    axios
      .post("http://localhost:3001/metodos_de_pago", formData)
      .then((response) => {
        console.log("Datos guardados en el servidor:", response.data);
      })
      .catch((error) => {
        console.error("Error al guardar los datos:", error);
      });
  };

  return { formData, handleInputChange, submitFromDataLista };
};

export default useFromDataLista;
