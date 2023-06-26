import * as yup from "yup";

const classSchema = yup.object().shape({
    class_name: yup.string().required("Class name is required"),
    stream: yup.string().required("Stream number is required"),
});

export default classSchema;
