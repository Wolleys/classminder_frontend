import React, { createContext, useContext, useState } from "react";

const DelDialogContext = createContext();

export const useDelDialog = () => {
    return useContext(DelDialogContext);
};

export const DelDialogProvider = ({ children }) => {
    const [delDialogOpen, setDelDialogOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openDelDialog = (item) => {
        setSelectedItem(item);
        setDelDialogOpen(true);
    };

    const closeDelDialog = () => {
        setDelDialogOpen(false);
        setSelectedItem(null);
    };

    const value = { delDialogOpen, selectedItem, openDelDialog, closeDelDialog };

    return (
        <DelDialogContext.Provider value={value}>
            {children}
        </DelDialogContext.Provider>
    );
};
