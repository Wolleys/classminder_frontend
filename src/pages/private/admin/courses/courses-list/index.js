import { useNavigate } from "react-router-dom";
import PrimaryTable from "../../../../../components/table";
import { useCourse } from "../../../../../context/CourseContext";
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

    const viewItem = (row) => navigate(`/jobs/job-profile/${row.id}`);
    const editItem = (row) => navigate(`/jobs/edit-job/${row.id}`);
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

    return <PrimaryTable data={courseData} columns={columns} />;
};

export default CoursesList;
