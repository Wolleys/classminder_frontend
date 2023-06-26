import React, { createContext, useContext, useState } from "react";

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const showSnackbar = () => setOpen(true);
    const hideSnackbar = () => setOpen(false);

    const value = { open, showSnackbar, hideSnackbar, message, setMessage };

    return (
        <SnackbarContext.Provider value={value}>
            {children}
        </SnackbarContext.Provider>
    );
};
