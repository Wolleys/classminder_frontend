import { createContext, useContext, useState } from "react";

// Form Context
const FormContext = createContext({});

// Custom hook to access the FormContext and its functions
export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  // Function to open dialog
  const handleClickOpen = () => setOpen(true);

  // Function to close dialog
  const handleClose = () => setOpen(false);

  // Value object to be provided by the context
  const formContextValue = {
    open,
    handleClose,
    handleClickOpen,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};
