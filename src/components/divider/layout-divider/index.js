import { Divider } from "@mui/material";

const LayoutDivider = () => {
    const dividerStyle = {
        mb: 2,
        mt: 0,
        borderBottom: "1px solid #d8dee4",
    };
    return <Divider sx={dividerStyle} />;
};

export default LayoutDivider;
