import { useState } from "react";
import AddClass from "../actions/add";
import EditClass from "../actions/edit";
import { useNavigate } from "react-router-dom";
import PrimaryTable from "../../../../../components/table";
import { useForm } from "../../../../../context/FormContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MainSnackbar from "../../../../../components/snackbar";
import { useClass } from "../../../../../context/ClassContext";
import { useSnackbar } from "../../../../../context/SnackbarContext";
import { useDelDialog } from "../../../../../context/DelDialogContext";
import DeleteDialog from "../../../../../components/dialog/delete-dialog";
import PrimarySearchBar from "../../../../../components/search-bar/primary";
import ViewEditDel from "../../../../../components/action-menu/view-edit-del";

const columns = [
    { value: "class_name", label: "Class name" },
    { value: "stream", label: "Stream number" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

const ClassesList = () => {
    const navigate = useNavigate();
    const { classes, deleteOneClass } = useClass();
    const { showSnackbar, setMessage } = useSnackbar();
    const { handleClickOpen, handleEditOpen, selectedRowData } = useForm();
    const { openDelDialog, selectedItem, closeDelDialog } = useDelDialog();

    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const viewItem = (row) => navigate(`/admin/classes/view/${row.id}`);
    const editItem = (row) => handleEditOpen(row);
    const deleteItem = (row) => openDelDialog(row);
    const viewEditDelProps = { viewItem, editItem, deleteItem };

    const handleDelete = async () => {
        if (selectedItem) {
            try {
                setIsSubmitting(true);
                setError(null);
                const course = await deleteOneClass(selectedItem.id);
                if (course) {
                    setMessage(course.message);
                }
                setIsSubmitting(false);
                closeDelDialog();
                showSnackbar();
            } catch (error) {
                if (!error?.response) {
                    setError("No Server Response");
                } else if (error.response?.data) {
                    setError(error.response?.data.error);
                }
            } finally {
                setIsSubmitting(false);
            }
        }
    };
    const deleteDialogProps = { error, handleDelete, isSubmitting };

    const classData = classes?.map((item) => {
        return {
            ...item,
            actions: <ViewEditDel row={item} {...viewEditDelProps} />,
        };
    });

    const searchBarProps = {
        label: "Add Class",
        open: handleClickOpen,
        icon: <AddOutlinedIcon />,
    };

    return (
        <>
            <PrimarySearchBar {...searchBarProps} />
            <PrimaryTable data={classData} columns={columns} />
            <AddClass /> {/* Add dialog */}
            {selectedRowData && <EditClass />} {/* Edit dialog */}
            <DeleteDialog {...deleteDialogProps} /> {/* Deleted dialog */}
            <MainSnackbar />
        </>
    );
};

export default ClassesList;
