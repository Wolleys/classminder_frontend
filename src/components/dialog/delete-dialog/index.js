import { forwardRef } from "react";
import { Button, Slide, Dialog, DialogActions } from "@mui/material";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteDialog = (props) => {
    const { open, handleCloseDialog, row, deleteItem } = props;

    const paperPropsStyle = {
        boxShadow: "none",
        backgroundColor: "#FAFAFA",
        border: "1px solid #ff818266",
    };
    const defaultProps = {
        open: open,
        keepMounted: true,
        onClose: handleCloseDialog,
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
        onClick: handleCloseDialog,
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
                <DialogContentText id="alert" sx={dialogContentTextStyle}>
                    Once you delete, there is no going back. Please be certain.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button {...butttonProps}> Cancle </Button>
                <Button
                    onClick={() => {
                        handleCloseDialog();
                        deleteItem(row);
                    }}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;
