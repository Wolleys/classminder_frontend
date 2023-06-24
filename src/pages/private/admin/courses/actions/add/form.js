import { Grid, Button } from "@mui/material";
import { useForm } from "../../../../../../context/FormContext";
import FormikForm from "../../../../../../components/form/formik";
import courseSchema from "../../../../../../validation/course-schema";
import SubmitBtn from "../../../../../../components/form/button/submit";
import FormDialog from "../../../../../../components/dialog/form-dialog";
import TextField from "../../../../../../components/form/text-field/primary";

const AddCourseForm = () => {
    const { handleClose } = useForm();
    
    const initialValues = { course_name: "", course_number: "" };

    const handleSubmit = async (values) => {
        console.log(values);
    };

    const formProps = {
        schema: courseSchema,
        values: initialValues,
        onSubmit: handleSubmit,
    };

    const cancleBtnProps = {
        variant: "outlined",
        onClick: handleClose,
        sx: {
            mr: 1,
            fontSize: 13,
            lineHeight: 1.3,
            color: "#0969da",
            textTransform: "none",
            border: "1px solid #0969da",
        },
    };

    return (
        <FormDialog label="Add Course">
            <FormikForm {...formProps}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <label>Course name</label>
                        <TextField name="course_name" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <label>Course number</label>
                        <TextField name="course_number" />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ mt: 2, textAlign: "right" }}>
                    <Button {...cancleBtnProps}>Cancle</Button>
                    <SubmitBtn>Save</SubmitBtn>
                </Grid>
            </FormikForm>
        </FormDialog>
    );
};

export default AddCourseForm;
