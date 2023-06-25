import AddCourse from "../actions/add";
import EditCourse from "../actions/edit";
import { useNavigate } from "react-router-dom";
import PrimaryTable from "../../../../../components/table";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useForm } from "../../../../../context/FormContext";
import { useCourse } from "../../../../../context/CourseContext";
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
    const { courses } = useCourse();
    const { handleClickOpen, handleEditOpen, selectedRowData } = useForm();

    const viewItem = (row) => navigate(`/admin/courses/view/${row.id}`);
    const editItem = (row) => {
        handleEditOpen(row);
    };
    const deleteItem = (row) => {
        console.log(row.id);
    };

    const courseData = courses?.map((item) => {
        return {
            ...item,
            actions: (
                <ViewEditDel
                    row={item}
                    viewItem={viewItem}
                    editItem={editItem}
                    deleteItem={deleteItem}
                />
            ),
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
            <AddCourse />
            {selectedRowData && <EditCourse />}
        </>
    );
};

export default CoursesList;
