import { Button, styled } from "@mui/material";

const StyledBtn = ({ ...props }) => {
    const PrimaryButton = styled(Button)({
        fontSize: 14,
        color: "#fff",
        lineHeight: 1.5,
        boxShadow: "none",
        textTransform: "none",
        backgroundColor: "#5046e4",
        border: "1px solid #5046e4",

        "&:hover": {
            borderColor: "#0969da",
            backgroundColor: "#0969da",
        },
        "&:active": {
            borderColor: "#5046e4",
            backgroundColor: "#0969da",
        },
    });

    return <PrimaryButton {...props} />;
};

export default StyledBtn;
