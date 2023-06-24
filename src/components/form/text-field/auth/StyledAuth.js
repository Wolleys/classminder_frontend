import TextField from "@mui/material/TextField";

const StyledAuth = ({ ...props }) => {
    const AuthTextField = {
        borderRadius: "4px",
        backgroundColor: "#f6f8fa",
        
        "& .MuiOutlinedInput-root": {
            "& input": {
                height: "unset",
                fontWeight: 400,
                fontSize: "14px",
                padding: "6px 12px",
                color: "#24292f",
                "&::placeholder": {
                    color: "#24292f",
                    fontWeight: 500,
                },
            },
            "& fieldset": {
                borderRadius: "6px",
                border: "1px solid #d0d7de",
            },
            "&:hover fieldset": {
                border: "1px solid #d5d8e1",
            },
            "&.Mui-focused fieldset": {
                boxShadow: "rgb(80 70 228 / 25%) 0px 0px 0px 0.2rem",
                border: "1px solid #d0d7de",
            },
        },
    };

    const formHelperStyle = {
        margin: 0,
        backgroundColor: "#FAFAFA",
    };

    const defaultProps = {
        size: "small",
        fullWidth: true,
        variant: "outlined",
        FormHelperTextProps: {
            sx: formHelperStyle,
        },
    };

    return <TextField {...props} {...defaultProps} sx={AuthTextField} />;
};

export default StyledAuth;
