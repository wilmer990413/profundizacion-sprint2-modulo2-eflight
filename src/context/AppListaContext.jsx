import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const [flight, setFlight] = useState({});
  const selectionFlight = (flight) => {
    setFlight(flight);
  };
  return (
    <ApiContext.Provider value={{ flight, selectionFlight }}>
      {children}
    </ApiContext.Provider>
  );
};
