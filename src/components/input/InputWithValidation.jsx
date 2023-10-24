import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

function InputWithValidation({
  label,
  type,
  name,
  value,
  onChange,
  width,
  placeholder,
}) {
  const isError = value === "";

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        width={{ base: "100%", md: width }}
        placeholder={placeholder}
        borderRadius={{ base: "50px", md: "55px" }}
        bg={"#e8f0fd"} // Utilizar un azul muy claro como color de fondo
      />
    </FormControl>
  );
}

export default InputWithValidation;
