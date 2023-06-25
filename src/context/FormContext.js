import { createContext, useContext, useState } from "react";

// Form Context
const FormContext = createContext({});

// Custom hook to access the FormContext and its functions
export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  // Function to open dialog
  const handleClickOpen = () => setOpen(true);

  // Function to close dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedRowData(null); // Reset selected row data when closing the dialog
  };

  // Function to open dialog and set the selected row data
  const handleEditOpen = (rowData) => {
    setSelectedRowData(rowData);
    setOpen(true);
  };

  // Value object to be provided by the context
  const formContextValue = {
    open,
    handleClose,
    handleClickOpen,
    handleEditOpen,
    selectedRowData,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};
