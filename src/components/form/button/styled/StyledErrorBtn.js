import { Button, styled } from "@mui/material";

const StyledErrorBtn = ({ ...props }) => {
    const ErrorButton = styled(Button)({
        fontSize: 14,
        lineHeight: 1.5,
        boxShadow: "none",
        textTransform: "none",
        backgroundColor: "#d32f2f",
        border: "1px solid #d32f2f",

        "&:hover": {
            borderColor: "#c62828",
            backgroundColor: "#c62828",
        },
        "&:active": {
            backgroundColor: "#c62828",
            borderColor: "#c62828",
        },
    });
    return <ErrorButton {...props} />;
};

export default StyledErrorBtn;
