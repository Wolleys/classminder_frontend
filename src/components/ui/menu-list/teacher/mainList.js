import { useState, useEffect } from "react";
import { List, ListItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Face6OutlinedIcon from "@mui/icons-material/Face6Outlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

const mainListItems = [
    {
        label: "Dashboard",
        icon: <DashboardOutlinedIcon />,
        path: "/teachers/dashboard",
    },
    {
        label: "Courses",
        icon: <LocalLibraryOutlinedIcon />,
        path: "/teachers/courses",
    },
    { label: "Classes", icon: <SchoolOutlinedIcon />, path: "/teachers/classes" },
    { label: "Students", icon: <Face6OutlinedIcon />, path: "/teachers/students" },
];

export const MainList = () => {
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
            {mainListItems.map((item) => (
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
