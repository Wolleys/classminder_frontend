import { useState, useEffect } from "react";
import { List, ListItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const secondaryListItems = [
    {
        label: "My Profile",
        icon: <AccountBoxOutlinedIcon />,
        path: "/teachers/profile",
    },
    {
        label: "Reports",
        icon: <AssessmentOutlinedIcon />,
        path: "/teachers/reports",
    },
];

export const SecondaryList = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const [selectedItem, setSelectedItem] = useState(pathName);

    useEffect(() => {
        setSelectedItem(pathName);
    }, [pathName]);

    const handleListItemClick = (item) => {
        setSelectedItem(item.path);
    };

    return (
        <List>
            {secondaryListItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                    <ListItemButton
                        component={Link}
                        to={item.path}
                        selected={selectedItem === item.path}
                        onClick={() => handleListItemClick(item)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};
