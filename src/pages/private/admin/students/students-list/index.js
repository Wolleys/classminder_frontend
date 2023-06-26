import { useState } from "react";
import AddStudent from "../actions/add";
import EditStudent from "../actions/edit";
import { useNavigate } from "react-router-dom";
import PrimaryTable from "../../../../../components/table";
import { useForm } from "../../../../../context/FormContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MainSnackbar from "../../../../../components/snackbar";
import { useStudent } from "../../../../../context/StudentContext";
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
    { value: "admin_number", label: "Admin number" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

const StudentsList = () => {
    const navigate = useNavigate();
    const { students, deleteOneStudent } = useStudent();
    const { showSnackbar, setMessage } = useSnackbar();
    const { handleClickOpen, handleEditOpen, selectedRowData } = useForm();
    const { openDelDialog, selectedItem, closeDelDialog } = useDelDialog();

    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const viewItem = (row) => navigate(`/admin/students/view/${row.id}`);
    const editItem = (row) => handleEditOpen(row);
    const deleteItem = (row) => openDelDialog(row);
    const viewEditDelProps = { viewItem, editItem, deleteItem };

    const handleDelete = async () => {
        if (selectedItem) {
            try {
                setIsSubmitting(true);
                setError(null);
                const student = await deleteOneStudent(selectedItem.id);
                if (student) {
                    setMessage(student.message);
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

    const studentData = students?.map((item) => {
        return {
            ...item,
            actions: <ViewEditDel row={item} {...viewEditDelProps} />,
        };
    });

    const searchBarProps = {
        label: "Add Student",
        open: handleClickOpen,
        icon: <AddOutlinedIcon />,
    };

    return (
        <>
            <PrimarySearchBar {...searchBarProps} />
            <PrimaryTable data={studentData} columns={columns} />
            {selectedRowData ? <EditStudent /> : <AddStudent />}
            <DeleteDialog {...deleteDialogProps} /> {/* Deleted dialog */}
            <MainSnackbar />
        </>
    );
};

export default StudentsList;
