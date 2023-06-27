import { useState } from "react";
import { addValues } from "../initialValues";
import { Grid, Alert } from "@mui/material";
import { useForm } from "../../../../../../context/FormContext";
import { useClass } from "../../../../../../context/ClassContext";
import FormikForm from "../../../../../../components/form/formik";
import { useCourse } from "../../../../../../context/CourseContext";
import { useTeacher } from "../../../../../../context/TeacherContext";
import teacherSchema from "../../../../../../validation/teacher-schema";
import SubmitBtn from "../../../../../../components/form/button/submit";
import CancleBtn from "../../../../../../components/form/button/cancle";
import FormDialog from "../../../../../../components/dialog/form-dialog";
import TextField from "../../../../../../components/form/text-field/primary";
import MultipleValues from "../../../../../../components/form/auto-complete/multiple-values";

const AddTeacherForm = () => {
    const { classes } = useClass();
    const { courses } = useCourse();
    const { handleClose } = useForm();
    const { createNewTeacher } = useTeacher();

    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const courseOptions = courses?.map((course) => ({
        label: course.course_name,
        value: course.id,
        key: course.id,
    }));

    const classOptions = classes?.map((item) => ({
        label: item.stream,
        value: item.id,
        key: item.id,
    }));

    const handleSubmit = async (values, { resetForm }) => {
        try {
            setIsSubmitting(true);
            setError(null);

            const teacher = await createNewTeacher(values);
            if (teacher) {
                resetForm();
                handleClose();
            }
            setIsSubmitting(false);
        } catch (error) {
            if (!error?.response) {
                setError("No Server Response");
            } else if (error.response?.data) {
                setError(error.response?.data.error);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const formProps = {
        schema: teacherSchema,
        values: addValues,
        onSubmit: handleSubmit,
    };

    return (
        <FormDialog label="Add Teacher">
            <FormikForm {...formProps}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                        <label>First name</label>
                        <TextField name="first_name" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <label>Middle name</label>
                        <TextField name="middle_name" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <label>Last name</label>
                        <TextField name="last_name" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <label>Email</label>
                        <TextField name="email" type="email" />
                    </Grid>
                    <Grid item xs={12} sm={2} md={2}>
                        <label>Age</label>
                        <TextField name="age" type="number" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <label>Service number</label>
                        <TextField name="service_number" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <label>Assign course</label>
                        <MultipleValues name="course_id" options={courseOptions} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <label>Assign class</label>
                        <MultipleValues name="class_id" options={classOptions} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <label>Password</label>
                        <TextField name="password" type="password" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <label>Confirm password</label>
                        <TextField name="confirm_password" type="password" />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ mt: 2, textAlign: "right" }}>
                    <CancleBtn onClick={handleClose}>Cancle</CancleBtn>
                    <SubmitBtn> {isSubmitting ? "Saving..." : "Save"}</SubmitBtn>
                </Grid>
                {error && (
                    <Alert severity="error" align="center" sx={{ mt: 2 }}>
                        {error}
                    </Alert>
                )}
            </FormikForm>
        </FormDialog>
    );
};

export default AddTeacherForm;
