import * as yup from "yup";

const updateStudentSchema = yup.object().shape({
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
        .min(6, "Must be at least 6 years")
        .required("Student age is requred"),
    admin_number: yup.string().required("Admin number is required"),
    course_id: yup
        .array()
        .min(1, "You must assign at least one course")
        .required("Course is required"),
    class_id: yup.string().required("Class is required"),
});

export default updateStudentSchema;
