import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function InputWithValidation({
  label,
  type,
  name,
  value,
  onChange,
  width,
  placeholder,
}) {
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
        bg={"#e8f0fd"}
      />
    </FormControl>
  );
}

export default InputWithValidation;
