import { Outlet } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";

const Main = () => {
    const boxStyles = {
        height: "100vh",
        overflow: "auto",
        flexGrow: 1,
        backgroundColor: "#f9f9f9",
    };

    return (
        <Box component="main" sx={boxStyles}>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default Main;
