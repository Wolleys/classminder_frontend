import { TextField } from "@mui/material";

const StyledPrimary = ({ ...props }) => {
    const PrimaryTextField = {
        backgroundColor: "#f6f8fa",
        borderRadius: "4px",

        "& .MuiOutlinedInput-root": {
            "& input": {
                fontWeight: 400,
                fontSize: "14px",
                color: "#24292f",
            },
            "& fieldset": {
                borderRadius: "4px",
                border: "1px solid #d0d7de",
            },
            "&:hover fieldset": {
                border: "1px solid #d5d8e1",
            },
            "&.Mui-focused fieldset": {
                border: "1px solid #d0d7de",
            },
            "& .MuiSvgIcon-root": {
                color: "#5046e4",
            },
        },
    };

    const formHelperStyle = {
        margin: 0,
        backgroundColor: "#fafafa",
    };

    const defaultProps = {
        size: "small",
        fullWidth: true,
        variant: "outlined",
        FormHelperTextProps: {
            sx: formHelperStyle,
        },
    };
    return <TextField {...props} {...defaultProps} sx={PrimaryTextField} />;
};

export default StyledPrimary;
