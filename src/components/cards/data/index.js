import { Box, Card, Typography, Avatar } from "@mui/material";

const DataCard = (props) => {
    const { data } = props;

    const boxStyle = {
        gap: 3,
        display: "grid",
        gridTemplateColumns: {
            md: "repeat(4, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
        },
    };

    return (
        <Box sx={boxStyle}>
            {data.map((item) => (
                <Card key={item.label} elevation={0}>
                    <Box sx={{ alignItems: "center", display: "flex", p: 2 }}>
                        <Box sx={{ display: "flex", mr: 2 }}>
                            <Avatar
                                sx={{ backgroundColor: item.bgcolor, height: 35, width: 35 }}
                            >
                                <item.icon />
                            </Avatar>
                        </Box>
                        <Box sx={{textAlign: "right"}}>
                            <Typography>
                                <span className="card-label">{item.label}</span>
                            </Typography>
                            <Typography style={{ textAlign: "center" }}>
                                <span className="card-digit">{item.content}</span>
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            ))}
        </Box>
    );
};

export default DataCard;
