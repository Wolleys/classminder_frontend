import { useState } from "react";
import { login } from "../../../api/auth";
import FormikForm from "../../../components/form/formik";
import { loginSchema } from "../../../validation/login-schema";
import SubmitBtn from "../../../components/form/button/submit";
import TextField from "../../../components/form/text-field/auth";
import AlertStack from "../../../components/ui/login-page/alert";
import { Alert, Container, Typography, Box } from "@mui/material";

const SignInForm = () => {
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const styles = {
        box: {
            marginTop: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        button: {
            mt: 2,
            mb: 2,
            borderRadius: "6px",
            padding: "6px 12px",
        },
    };

    const initialValues = { email: "", password: "" };
    const handleSubmit = async (values) => {
        try {
            setIsSubmitting(true); // Set the submitting state to true
            setError(null); // Clear any previous errors
            const response = await login(values);
            console.log(response.data);
        } catch (error) {
            if (!error?.response) {
                setError("No Server Response");
            } else if (error.response?.data) {
                setError(error.response?.data.error);
            }
        } finally {
            setIsSubmitting(false); // Set the submitting state back to false
        }
    };

    const formProps = {
        schema: loginSchema,
        values: initialValues,
        onSubmit: handleSubmit,
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={styles.box}>
                <Typography component="h1" variant="h6" sx={{ mb: 1 }}>
                    Sign in
                </Typography>
                <FormikForm {...formProps}>
                    <TextField
                        name="email"
                        placeholder="Email address"
                        style={{ marginBottom: 10 }}
                    />
                    <TextField name="password" placeholder="Password" type="password" />
                    <SubmitBtn fullWidth sx={styles.button}>
                        {isSubmitting ? "Signing In..." : "Sign In"}
                    </SubmitBtn>
                </FormikForm>
            </Box>
            <AlertStack>
                {error && (
                    <Alert severity="error" align="center">
                        {error}
                    </Alert>
                )}
            </AlertStack>
        </Container>
    );
};

export default SignInForm;
