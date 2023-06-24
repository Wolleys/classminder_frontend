import { Grid } from "@mui/material";
import ActionBtn from "../../form/button/action";
import SearchTextField from "../../form/text-field/search";

const PrimarySearchBar = (props) => {
    const { label, icon, open } = props;

    const textFieldStyles = {
        mt: 0,
        mb: { xs: 0, sm: 1 },
        width: { xs: "100%", sm: "auto" },
    };
    const gridStyles = {
        textAlign: "right",
        mb: { xs: 1 },
        mt: { xs: -0.5, sm: 0.5 },
    };
    const actionBtnProps = {
        onClick: open,
        startIcon: icon,
        sx: { mr: 1, fontSize: "13px" },
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "left" }}>
                <SearchTextField sx={textFieldStyles} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={gridStyles}>
                <ActionBtn {...actionBtnProps}>{label}</ActionBtn>
            </Grid>
        </Grid>
    );
};

export default PrimarySearchBar;
