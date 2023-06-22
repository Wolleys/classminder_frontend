import PrimaryTable from "../../../../../components/table";

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

const courseData = []

const CoursesList = () => {
    return <PrimaryTable data={courseData} columns={columns} />;
};

export default CoursesList;
