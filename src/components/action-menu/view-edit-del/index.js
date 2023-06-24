import { useState } from "react";
import MenuDivider from "../../divider/menu-divider";
import DeleteDialog from "../../dialog/delete-dialog";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { ListItemText, ListItemIcon } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const ViewEditDel = (props) => {
    const { row, viewItem, editItem, deleteItem } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    //Vertical Menu
    const openMenu = Boolean(anchorEl);
    const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    //Delete Dialog
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpenDialog(false);
        }
    };

    const delDialogProps = {
        deleteItem,
        open: openDialog,
        handleCloseDialog,
    };

    const vertIconStyle = {
        color: "#57606a",
    };
    const paperPropsStyle = {
        backgroundColor: "#ffffff",
        border: "1px solid #d0d7de",
    };
    const menuStyle = {
        elevation: 0,
        open: openMenu,
        anchorEl: anchorEl,
        PaperProps: {
            sx: paperPropsStyle,
        },
        onClose: handleCloseMenu,
        anchorOrigin: { vertical: "top", horizontal: "left" },
        transformOrigin: { vertical: "top", horizontal: "left" },
    };
    const menuItemStyle = {
        "& .MuiListItemText-primary": {
            fontSize: "14px",
            color: "#24292f",
        },
        "& .MuiSvgIcon-root": {
            fontSize: "17px",
            color: "#57606a",
        },
        "&:hover": {
            color: "#444",
            backgroundColor: "#F5F5F5",
            "& .MuiSvgIcon-root": {
                color: "#5046e4",
            },
        },
    };

    const menuItems = [
        {
            label: "More",
            link: () => viewItem(row),
            icon: VisibilityOutlinedIcon,
        },
        {
            label: "Edit",
            link: () => editItem(row),
            icon: EditOutlinedIcon,
        },
    ];

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleOpenMenu}
            >
                <MoreVertIcon sx={vertIconStyle} />
            </IconButton>
            <Menu {...menuStyle}>
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.label}
                        onClick={() => {
                            handleCloseMenu();
                            item.link();
                        }}
                        sx={menuItemStyle}
                    >
                        <ListItemIcon>
                            <item.icon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText> {item.label} </ListItemText>
                    </MenuItem>
                ))}
                <MenuDivider />
                <MenuItem
                    onClick={() => {
                        handleOpenDialog();
                        handleCloseMenu();
                    }}
                >
                    <ListItemIcon>
                        <DeleteOutlineOutlinedIcon fontSize="small" color="error" />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#C62828",
                        }}
                    >
                        Delete
                    </ListItemText>
                </MenuItem>
            </Menu>
            <DeleteDialog {...delDialogProps} />
        </>
    );
};

export default ViewEditDel;
