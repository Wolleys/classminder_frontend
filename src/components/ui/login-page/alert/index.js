import { Stack, AlertTitle, Alert, Box } from "@mui/material";

const AlertStack = ({ children }) => {
    const titleStyle = {
        mt: 0,
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.5,
        textAlign: "left",
    };
    const spanStyle = { display: "flex", fontSize: "13px" };

    return (
        <Box sx={{ display: "flex" }}>
            <Stack sx={{ width: "100%" }} spacing={1}>
                <Alert severity="info">
                    <AlertTitle sx={titleStyle}>Login credentials</AlertTitle>
                    <span style={spanStyle}>
                        Email <strong>: admin@mail.com</strong>
                    </span>
                    <span style={spanStyle}>
                        Password <strong>: admin@2023</strong>
                    </span>
                </Alert>
                {children}
            </Stack>
        </Box>
    );
};

export default AlertStack;
