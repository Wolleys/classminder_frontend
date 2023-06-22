import { TableRow, styled } from "@mui/material";

const StyledTableRow = ({ ...props }) => {
    const StyledTableRow = styled(TableRow)(() => ({
        "&:hover": {
            backgroundColor: "#f6f8fa",
        },
        "&:last-child td, &:last-child th": {
            border: 0,
        },
        "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: "#f6f8fa",
        },
    }));

    return <StyledTableRow {...props} />;
};

export default StyledTableRow;
