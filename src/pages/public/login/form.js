import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormikForm from "../../../components/form/formik";
import { loginSchema } from "../../../validation/login-schema";
import SubmitBtn from "../../../components/form/button/submit";
import TextField from "../../../components/form/text-field/auth";
import AlertStack from "../../../components/ui/login-page/alert";

const SignInForm = () => {
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
    const handleSubmit = (values) => {
        console.log(values);
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
                        Sign In
                    </SubmitBtn>
                </FormikForm>
            </Box>
            <AlertStack />
        </Container>
    );
};

export default SignInForm;
