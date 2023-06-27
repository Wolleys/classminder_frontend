import { Paper, Autocomplete } from "@mui/material";

const StyledAutoComplete = ({ ...props }) => {
    const listBoxStyle = {
        fontSize: "14px",
        color: "#24292f",
        "& .Mui-focused": {
            backgroundColor: "#F0F2F4 !important",
        },
        "& :hover": {
            backgroundColor: "#F0F2F4 !important",
        },
    };

    const CustomPaper = (props) => {
        return (
            <Paper
                variant="outlined"
                {...props}
                style={{
                    marginTop: "5px",
                    borderRadius: "4px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #d0d7de",
                }}
            />
        );
    };

    const defaultProps = {
        size: "small",
        ListboxProps: {
            sx: listBoxStyle,
        },
        PaperComponent: CustomPaper,
        getOptionLabel: (option) => option.label,
        isOptionEqualToValue: (option, value) => option.value === value.value,
    };

    return <Autocomplete {...defaultProps} {...props} />;
};

export default StyledAutoComplete;
