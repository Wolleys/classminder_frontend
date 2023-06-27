import { useState } from "react";
import AddTeacher from "../actions/add";
import EditTeacher from "../actions/edit";
import { useNavigate } from "react-router-dom";
import PrimaryTable from "../../../../../components/table";
import { useForm } from "../../../../../context/FormContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MainSnackbar from "../../../../../components/snackbar";
import { useTeacher } from "../../../../../context/TeacherContext";
import { useSnackbar } from "../../../../../context/SnackbarContext";
import { useDelDialog } from "../../../../../context/DelDialogContext";
import DeleteDialog from "../../../../../components/dialog/delete-dialog";
import PrimarySearchBar from "../../../../../components/search-bar/primary";
import ViewEditDel from "../../../../../components/action-menu/view-edit-del";

const columns = [
    { value: "first_name", label: "First name" },
    { value: "middle_name", label: "Middle name" },
    { value: "last_name", label: "Last name" },
    { value: "email", label: "Email" },
    { value: "age", label: "Age" },
    { value: "service_number", label: "Service number" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

const TeachersList = () => {
    const navigate = useNavigate();
    const { teachers, deleteOneTeacher } = useTeacher();
    const { showSnackbar, setMessage } = useSnackbar();
    const { handleClickOpen, handleEditOpen, selectedRowData } = useForm();
    const { openDelDialog, selectedItem, closeDelDialog } = useDelDialog();

    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const viewItem = (row) => navigate(`/admin/teachers/view/${row.id}`);
    const editItem = (row) => handleEditOpen(row);
    const deleteItem = (row) => openDelDialog(row);
    const viewEditDelProps = { viewItem, editItem, deleteItem };

    const handleDelete = async () => {
        if (selectedItem) {
            try {
                setIsSubmitting(true);
                setError(null);
                const teacher = await deleteOneTeacher(selectedItem.id);
                if (teacher) {
                    setMessage(teacher.message);
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

    const teacherData = teachers?.map((item) => {
        return {
            ...item,
            actions: <ViewEditDel row={item} {...viewEditDelProps} />,
        };
    });

    const searchBarProps = {
        label: "Add Teacher",
        open: handleClickOpen,
        icon: <AddOutlinedIcon />,
    };

    return (
        <>
            <PrimarySearchBar {...searchBarProps} />
            <PrimaryTable data={teacherData} columns={columns} />
            {selectedRowData ? <EditTeacher /> : <AddTeacher />}
            <DeleteDialog {...deleteDialogProps} /> {/* Deleted dialog */}
            <MainSnackbar />
        </>
    );
};

export default TeachersList;
