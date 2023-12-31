import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MainList from "../menu-list/admin/mainList";
import SettingsList from "../menu-list/admin/settingsList";
import SecondaryList from "../menu-list/admin/secondaryList";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { List, Divider, IconButton, Toolbar, Box } from "@mui/material";

// Student menu lists
import { MainList as StudMainList } from "../menu-list/student/mainList";
import { SettingsList as StudSettingsList } from "../menu-list/student/settingsList";

// Teacher menu lists
import { MainList as TchrMainList } from "../menu-list/teacher/mainList";
import { SettingsList as TchrSettingsList } from "../menu-list/teacher/settingsList";
import { SecondaryList as TchrSecondaryList } from "../menu-list/teacher/secondaryList";

const drawerWidth = 240;
const AppDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const Drawer = (props) => {
    const { open, toggleDrawer, userRole } = props;
    return (
        <AppDrawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                {userRole === "Admin" ? (
                    <MainList />
                ) : userRole === "Teacher" ? (
                    <TchrMainList />
                ) : (
                    <StudMainList />
                )}

                <Divider sx={{ my: 1 }} />
                {userRole === "Admin" ? (
                    <SecondaryList />
                ) : userRole === "Teacher" ? (
                    <TchrSecondaryList />
                ) : null}
            </List>
            <Box style={{ bottom: 0, position: "absolute", width: "100%" }}>
                {userRole === "Admin" ? (
                    <SettingsList />
                ) : userRole === "Teacher" ? (
                    <TchrSettingsList />
                ) : (
                    <StudSettingsList />
                )}
            </Box>
        </AppDrawer>
    );
};

export default Drawer;
