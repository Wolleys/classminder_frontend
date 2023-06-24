import * as yup from "yup";

const courseSchema = yup.object().shape({
    course_name: yup.string().required("Course name is required"),
    course_number: yup.string().required("Course number is required"),
});

export default courseSchema;
