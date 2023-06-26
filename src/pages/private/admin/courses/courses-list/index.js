import { useState } from "react";
import AddCourse from "../actions/add";
import EditCourse from "../actions/edit";
import { useNavigate } from "react-router-dom";
import PrimaryTable from "../../../../../components/table";
import { useForm } from "../../../../../context/FormContext";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MainSnackbar from "../../../../../components/snackbar";
import { useCourse } from "../../../../../context/CourseContext";
import { useSnackbar } from "../../../../../context/SnackbarContext";
import { useDelDialog } from "../../../../../context/DelDialogContext";
import DeleteDialog from "../../../../../components/dialog/delete-dialog";
import PrimarySearchBar from "../../../../../components/search-bar/primary";
import ViewEditDel from "../../../../../components/action-menu/view-edit-del";

const columns = [
    { value: "course_name", label: "Course name" },
    { value: "course_number", label: "Course number" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

const CoursesList = () => {
    const navigate = useNavigate();
    const { courses, deleteOneCourse } = useCourse();
    const { showSnackbar, setMessage } = useSnackbar();
    const { handleClickOpen, handleEditOpen, selectedRowData } = useForm();
    const { openDelDialog, selectedItem, closeDelDialog } = useDelDialog();

    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const viewItem = (row) => navigate(`/admin/courses/view/${row.id}`);
    const editItem = (row) => handleEditOpen(row);
    const deleteItem = (row) => openDelDialog(row);
    const viewEditDelProps = { viewItem, editItem, deleteItem };

    const handleDelete = async () => {
        if (selectedItem) {
            try {
                setIsSubmitting(true);
                setError(null);
                const course = await deleteOneCourse(selectedItem.id);
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

    const courseData = courses?.map((item) => {
        return {
            ...item,
            actions: <ViewEditDel row={item} {...viewEditDelProps} />,
        };
    });

    const searchBarProps = {
        label: "Add Course",
        open: handleClickOpen,
        icon: <AddOutlinedIcon />,
    };

    return (
        <>
            <PrimarySearchBar {...searchBarProps} />
            <PrimaryTable data={courseData} columns={columns} />
            <AddCourse /> {/* Add dialog */}
            {selectedRowData && <EditCourse />} {/* Edit dialog */}
            <DeleteDialog {...deleteDialogProps} /> {/* Deleted dialog */}
            <MainSnackbar />
        </>
    );
};

export default CoursesList;
