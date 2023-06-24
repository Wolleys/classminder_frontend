import { TextField, styled } from "@mui/material";

const StyledSearch = ({ ...props }) => {
    const SearchTextField = styled(TextField)(() => ({
        background: "#f6f8fa",
        borderRadius: "4px",
        
        "& .MuiOutlinedInput-root": {
            "& input": {
                height: "unset",
                fontWeight: 400,
                fontSize: "14px",
                padding: "6px 0 6px 12px",
                color: "#24292f",
                "&::placeholder": {
                    color: "#03060b",
                    fontWeight: 500,
                },
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
                fontSize: "21px",
                color: "#ccc",
            },
        },
    }));

    const defaultProps = {
        size: "small",
        variant: "outlined",
        placeholder: "Search...",
    };

    return <SearchTextField {...defaultProps} {...props} />;
};

export default StyledSearch;
