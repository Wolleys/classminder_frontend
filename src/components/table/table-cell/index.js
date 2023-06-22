import { TableCell, tableCellClasses, styled } from "@mui/material";

const StyledTableCell = ({ ...props }) => {
    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize: 14,
            paddingTop: "8px",
            paddingBottom: "8px",
            fontWeight: 500,
            cursor: "default",
            color: "#24292f",
            backgroundColor: "#f6f8fa",
            borderBottom: "1px solid #d0d7de",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            color: "#57606a",
            borderBottom: "1px solid #d8dee4",
        },
    }));

    return <StyledTableCell {...props} />;
};

export default StyledTableCell;
