import { Box, Typography } from "@mui/material";

const Title = ({ title }) => {
    const boxTypoStyle = {
        fontWeight: 600,
        fontSize: "22px",
        color: "#0A0A0A",
        textTransform: "capitalize",
    };
    return (
        <Box sx={{ textAlign: "left", mb: 1 }}>
            <Typography sx={boxTypoStyle} variant="h3">
                {title}
            </Typography>
        </Box>
    );
};

export default Title;
