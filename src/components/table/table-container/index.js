import { TableContainer, Paper } from "@mui/material";

const StyledTableContainer = ({ ...props }) => {
    const CustomPaper = (props) => {
        return (
            <Paper
                elevation={0}
                {...props}
                sx={{
                    maxHeight: 500,
                    background: "transparent",
                    border: "1px solid #d0d7de",
                }}
            />
        );
    };

    const defaultProps = {
        component: CustomPaper,
    };

    return <TableContainer {...defaultProps} {...props} />;
};

export default StyledTableContainer;
