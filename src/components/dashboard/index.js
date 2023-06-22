import { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../ui/header";
import Drawer from "../ui/drawer";
import Main from "../main";
import { useAuth } from "../../context/AuthContext";
import { getRoleFromToken } from "../../utils/navigate";

const Dashboard = () => {
    const { user } = useAuth();
    const userRole = getRoleFromToken(user);
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => setOpen(!open);
    const headerDrawerProps = { open, toggleDrawer, userRole };

    return (
        <Box sx={{ display: "flex" }}>
            <Header {...headerDrawerProps} />
            <Drawer {...headerDrawerProps} />
            <Main />
        </Box>
    );
};

export default Dashboard;
