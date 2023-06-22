import TBody from "./table-body";
import THeader from "./table-header";
import { Table } from "@mui/material";
import StyledTableContainer from "./table-container";

const PrimaryTable = (props) => {
    const { data, columns } = props;

    return (
        <StyledTableContainer {...props}>
            <Table size="small" stickyHeader>
                <THeader data={data} columns={columns} />
                <TBody data={data} columns={columns} />
            </Table>
        </StyledTableContainer>
    );
};

export default PrimaryTable;
