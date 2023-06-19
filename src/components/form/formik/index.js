import { Formik, Form } from "formik";

const FormikForm = (props) => {
    const { values, schema, onSubmit, children } = props;
    return (
        <Formik
            initialValues={{ ...values }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Form autoComplete="off">{children}</Form>
        </Formik>
    );
};

export default FormikForm;
