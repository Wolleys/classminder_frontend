import StyledTableCell from "../table-cell";
import { TableRow, TableHead } from "@mui/material";

const THeader = (props) => {
    const { columns } = props;
    return (
        <TableHead>
            <TableRow>
                {columns?.length > 0 ? (
                    columns?.map((head) => (
                        <StyledTableCell align={head.align} key={head.value}>
                            {head.label}
                        </StyledTableCell>
                    ))
                ) : (
                    <StyledTableCell colSpan="100%" sx={{ textAlign: "center" }}>
                        <span>No table heads found</span>
                    </StyledTableCell>
                )}
            </TableRow>
        </TableHead>
    );
};

export default THeader;
