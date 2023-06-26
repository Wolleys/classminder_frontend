import { useState } from "react";
import { Grid, Button, Alert } from "@mui/material";
import { useForm } from "../../../../../../context/FormContext";
import FormikForm from "../../../../../../components/form/formik";
import { useClass } from "../../../../../../context/ClassContext";
import classSchema from "../../../../../../validation/class-schema";
import SubmitBtn from "../../../../../../components/form/button/submit";
import FormDialog from "../../../../../../components/dialog/form-dialog";
import TextField from "../../../../../../components/form/text-field/primary";

const AddClassForm = () => {
    const { handleClose } = useForm();
    const { createNewClass } = useClass();

    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const initialValues = { class_name: "", stream: "" };
    const handleSubmit = async (values, { resetForm }) => {
        try {
            setIsSubmitting(true);
            setError(null);

            const classData = await createNewClass(values);
            if (classData) {
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
        schema: classSchema,
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
        <FormDialog label="Add Class">
            <FormikForm {...formProps}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <label>Class name</label>
                        <TextField name="class_name" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <label>Stream number</label>
                        <TextField name="stream" />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ mt: 2, textAlign: "right" }}>
                    <Button {...cancleBtnProps}>Cancle</Button>
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

export default AddClassForm;
