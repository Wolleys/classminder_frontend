import { forwardRef } from "react";
import ErrorBtn from "../../form/button/error";
import { useDelDialog } from "../../../context/DelDialogContext";
import { Button, Slide, Dialog, DialogActions, Alert } from "@mui/material";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteDialog = (props) => {
    const { error, handleDelete, isSubmitting } = props;
    const { delDialogOpen, closeDelDialog } = useDelDialog();

    const paperPropsStyle = {
        boxShadow: "none",
        backgroundColor: "#FAFAFA",
        border: "1px solid #ff818266",
    };
    const defaultProps = {
        open: delDialogOpen,
        keepMounted: true,
        onClose: closeDelDialog,
        TransitionComponent: Transition,
        PaperProps: {
            sx: paperPropsStyle,
        },
    };
    const dialogTitleStyle = {
        paddingTop: 0.5,
        marginBottom: 1,
        fontSize: "14px",
        fontWeight: "600",
        paddingBottom: 0.5,
        color: "#24292f",
    };
    const dialogContentTextStyle = {
        fontSize: "14px",
        color: "#24292f",
    };
    const butttonProps = {
        color: "error",
        variant: "outlined",
        onClick: closeDelDialog,
        sx: {
            fontSize: 14,
            lineHeight: 1.3,
            textTransform: "none",
        },
    };

    return (
        <Dialog {...defaultProps}>
            <DialogTitle sx={dialogTitleStyle}>Are you absolutely sure?</DialogTitle>
            <DialogContent>
                <DialogContentText sx={dialogContentTextStyle}>
                    Once you delete, there is no going back. Please be certain.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button {...butttonProps} disabled={isSubmitting}>
                    Cancle
                </Button>
                <ErrorBtn onClick={handleDelete}>
                    {isSubmitting ? "Deleting..." : "Delete"}
                </ErrorBtn>
            </DialogActions>
            {error && (
                <Alert severity="error" align="center" sx={{ mt: 2 }}>
                    {error}
                </Alert>
            )}
        </Dialog>
    );
};

export default DeleteDialog;
