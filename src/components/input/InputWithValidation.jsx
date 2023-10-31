// InputWithValidation.js
import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function InputWithValidation(props) {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <Input
        {...props}
        borderRadius={{ base: "50px", md: "55px" }}
        bg={"#e8f0fd"}
      />
    </FormControl>
  );
}

export default InputWithValidation;
