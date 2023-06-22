import { Outlet } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";

const Main = () => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: "#ecedef",
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
            }}
        >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default Main;
