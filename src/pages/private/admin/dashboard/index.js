import Title from "../../../../components/page-title";
import { Divider } from "@mui/material";
import DataCardInfo from "./data";

const Dashbord = () => {
    return (
        <>
            <Title title="Admin Dashboard" />
            <Divider sx={{mb: 3}} />
            <DataCardInfo />
        </>
    );
};

export default Dashbord;
