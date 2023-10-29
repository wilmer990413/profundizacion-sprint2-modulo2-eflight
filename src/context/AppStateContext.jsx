import React, { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
  formData: {
    nombre: "",
    Surname: "",
    Title: "",
    birthDate: "",
    country: "",
    passportNumber: "",
    countryIssue: "",
    passportDate: "",
    Email: "",
    phoneNumber: "",
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "updateFormData":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
