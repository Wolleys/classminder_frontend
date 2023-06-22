import { Box, Card, Avatar, Typography } from "@mui/material";

const revenue = [
    { content: "20", label: "Students" },
    { content: "4", label: "Teachers" },
    { content: "8", label: "Classes" },
    { content: "15", label: "Courses" },
];

const CardLabels = () => {
    const cardStyle = {
        borderRadius: "6px",
        backgroundColor: "#fff",
    };

    const avatarStyle = {
        width: "1em",
        height: "1em",
        backgroundColor: "#ccc",
    };

    return (
        <>
            <Box
                sx={{
                    gap: 3,
                    display: "grid",
                    gridTemplateColumns: {
                        md: "repeat(4, 1fr)",
                        sm: "repeat(2, 1fr)",
                        xs: "repeat(1, 1fr)",
                    },
                }}
            >
                {revenue.map((item) => (
                    <Card key={item.label} sx={cardStyle} elevation={0}>
                        <Box sx={{ alignItems: "center", display: "flex", p: 2 }}>
                            <Box sx={{ display: "flex", mr: 2 }}>
                                <Avatar sx={avatarStyle}> </Avatar>
                            </Box>
                            <Box>
                                <Typography>
                                    <span className="card_label">{item.label}</span>
                                </Typography>
                                <Typography>
                                    <span className="card_prices">{item.content}</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>
        </>
    );
};
export default CardLabels;
