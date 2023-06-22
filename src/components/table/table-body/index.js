import { TableBody } from "@mui/material";
import StyledTableRow from "../table-row";
import StyledTableCell from "../table-cell";

const TBody = (props) => {
    const { data, columns } = props;
    return (
        <TableBody>
            {data?.length > 0 ? (
                data?.map((row) => (
                    <StyledTableRow key={row.id}>
                        {columns?.map((col, index) => (
                            <StyledTableCell key={index} align={col.align} style={col.style}>
                                {row[col.value]}
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))
            ) : (
                <StyledTableRow>
                    <StyledTableCell colSpan="100%" sx={{ textAlign: "center", py: 6 }}>
                        <span>No data found</span>
                    </StyledTableCell>
                </StyledTableRow>
            )}
        </TableBody>
    );
};

export default TBody;
