import { useField } from "formik";
import StyledPrimary from "./StyledPrimary";

const TextField = ({ name, ...otherProps }) => {
    const [field, meta] = useField(name);

    const configTextField = {
        ...field,
        ...otherProps,
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return <StyledPrimary {...configTextField} />;
};

export default TextField;
