import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

function SelectWithValidation({
  label,
  name,
  value,
  onChange,
  options,
  width,
}) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select
        value={value}
        onChange={onChange}
        name={name}
        width={{ base: "100%", md: width }}
        borderRadius={{ base: "10px", md: "55px" }}
        bg={"#e8f0fd"}
        _placeholder={{ color: "#bdc0c7" }}
        placeholder={`Select ${label}`}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectWithValidation;
