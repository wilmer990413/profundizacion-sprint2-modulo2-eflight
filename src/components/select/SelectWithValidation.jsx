// SelectWithValidation.js
import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

function SelectWithValidation(props) {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <Select
        {...props} // Utiliza el operador de propagación para pasar todas las props
        borderRadius={{ base: "10px", md: "55px" }}
        bg={"#e8f0fd"}
        _placeholder={{ color: "#bdc0c7" }}
        placeholder={`Select ${props.label}`}
      >
        {props.options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectWithValidation;
