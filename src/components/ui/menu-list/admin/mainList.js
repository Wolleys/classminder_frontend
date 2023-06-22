import { useState, useEffect } from "react";
import { List, ListItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Face6OutlinedIcon from "@mui/icons-material/Face6Outlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

const mainListItems = [
    {
        label: "Dashboard",
        icon: <DashboardOutlinedIcon />,
        path: "/admin/dashboard",
    },
    {
        label: "Courses",
        icon: <LocalLibraryOutlinedIcon />,
        path: "/admin/courses",
    },
    { label: "Classes", icon: <SchoolOutlinedIcon />, path: "/admin/classes" },
    { label: "Students", icon: <Face6OutlinedIcon />, path: "/admin/students" },
    { label: "Teachers", icon: <Person3OutlinedIcon />, path: "/admin/teachers" },
];

const MainList = () => {
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

export default MainList;
