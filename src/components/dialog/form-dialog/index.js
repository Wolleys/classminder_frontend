import { forwardRef } from "react";
import { useForm } from "../../../context/FormContext";
import { Slide, Dialog, DialogContent } from "@mui/material";
import { DialogContentText, DialogTitle } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const FormDialog = (props) => {
    const { children, label } = props;
    const { open, handleClose } = useForm();

    const paperPropsStyle = {
        boxShadow: "none",
        backgroundColor: "#fafafa",
        border: "1px solid #d0d7de",
    };
    const defaultProps = {
        open: open,
        keepMounted: true,
        onClose: handleClose,
        TransitionComponent: Transition,
        PaperProps: {
            sx: paperPropsStyle,
        },
    };
    const dialogTitleStyle = {
        paddingTop: 0.5,
        marginBottom: 1,
        fontSize: "16px",
        fontWeight: "600",
        paddingBottom: 0.5,
        color: "#24292f",
    };
    const dialogContentTextStyle = {
        fontSize: "14px",
        color: "#24292f",
    };

    return (
        <Dialog {...defaultProps}>
            <DialogTitle sx={dialogTitleStyle}>{label}</DialogTitle>
            <DialogContent>
                <DialogContentText sx={dialogContentTextStyle} component="div">
                    {children}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default FormDialog;
