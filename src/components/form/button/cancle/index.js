import { Button } from "@mui/material";

const CancleBtn = ({ children, ...otherProps }) => {
    const cancleBtnProps = {
        variant: "outlined",
        ...otherProps,
        disableElevation: true,
        sx: {
            mr: 1,
            fontSize: 13,
            lineHeight: 1.3,
            color: "#0969da",
            textTransform: "none",
            border: "1px solid #0969da",
        },
    };
    return <Button {...cancleBtnProps}>{children}</Button>;
};

export default CancleBtn;
