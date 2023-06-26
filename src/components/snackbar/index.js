import { forwardRef } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useSnackbar } from "../../context/SnackbarContext";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainSnackbar = () => {
    const { open, hideSnackbar, message } = useSnackbar();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        hideSnackbar(false);
    };

    const snackbarProps = {
        open,
        onClose: handleClose,
        autoHideDuration: 6000,
        anchorOrigin: {
            vertical: "top",
            horizontal: "center",
        },
        sx: {mt: 7}
    };

    return (
        <Snackbar {...snackbarProps}>
            {message && (
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    {message}
                </Alert>
            )}
        </Snackbar>
    );
};

export default MainSnackbar;
