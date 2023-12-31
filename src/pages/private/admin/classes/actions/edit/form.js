import { useState } from "react";
import { Grid, Alert } from "@mui/material";
import { useForm } from "../../../../../../context/FormContext";
import FormikForm from "../../../../../../components/form/formik";
import { useClass } from "../../../../../../context/ClassContext";
import classSchema from "../../../../../../validation/class-schema";
import SubmitBtn from "../../../../../../components/form/button/submit";
import CancleBtn from "../../../../../../components/form/button/cancle";
import FormDialog from "../../../../../../components/dialog/form-dialog";
import TextField from "../../../../../../components/form/text-field/primary";

const EditClassForm = () => {
    const { updateOneClass } = useClass();
    const { handleClose, selectedRowData } = useForm();

    const [error, setError] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const initialValues = {
        class_name: selectedRowData?.class_name || "",
        stream: selectedRowData?.stream || "",
    };

    const handleSubmit = async (values) => {
        try {
            setIsSubmitting(true);
            setError(null);

            const results = await updateOneClass(selectedRowData.id, values);
            if (results) {
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

    return (
        <FormDialog label="Edit Class">
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
                    <CancleBtn onClick={handleClose}>Cancle</CancleBtn>
                    <SubmitBtn> {isSubmitting ? "Updating..." : "Update"}</SubmitBtn>
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

export default EditClassForm;
