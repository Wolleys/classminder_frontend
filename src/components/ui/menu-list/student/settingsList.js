import { useState, useEffect } from "react";
import { List, ListItem } from "@mui/material";
import useLogout from "../../../../hooks/useLogout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material";

const settingsListItems = [
    {
        label: "Settings",
        icon: <SettingsOutlinedIcon />,
        path: "/students/settings",
    },
];

export const SettingsList = () => {
    const logout = useLogout();
    const location = useLocation();
    const navigate = useNavigate();
    const pathName = location.pathname;
    const [selectedItem, setSelectedItem] = useState(pathName);

    useEffect(() => {
        setSelectedItem(pathName);
    }, [pathName]);

    const handleListItemClick = (item) => {
        setSelectedItem(item.path);
    };

    const logoutUser = async () => {
        await logout();
        navigate("/");
    };

    return (
        <List>
            {settingsListItems.map((item) => (
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
            <ListItem disablePadding>
                <ListItemButton onClick={logoutUser}>
                    <ListItemIcon>
                        <LogoutOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};
