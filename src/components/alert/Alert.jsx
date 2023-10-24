import React from "react";
import { Alert, Box, chakra } from "@chakra-ui/react";

function Alert() {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Alert
        status="info"
        colorScheme="blue"
        w="100%"
        bg="#D8D8FF" // Fondo más claro
      >
        <chakra.p color="#6C6CFE">
          Passport valid for at least 6 months from departure date is required
          for international travel or transit abroad. Make sure that the
          passenger's name is exactly as written in the government issued
          ID/Passport/Driving License. Avoid any mistake, because some airlines
          don't allow name corrections after booking.
        </chakra.p>
      </Alert>
    </Box>
  );
}

export default Alert;
