import * as yup from "yup";

const updateTeacherSchema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    middle_name: yup.string().required("Middle name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    age: yup
        .number()
        .positive("Must be more than 0")
        .integer("Must be an integer number")
        .min(18, "Must be at least 18 years")
        .required("Teacher age is requred"),
    service_number: yup.string().required("Service number is required"),
    course_id: yup
        .array()
        .min(1, "You must assign at least one course")
        .required("Course is required"),
    class_id: yup
        .array()
        .min(1, "You must assign at least one class")
        .required("Class is required"),
});

export default updateTeacherSchema;
