import { useField } from "formik";
import StyledTextField from "./styledTextField";

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

    return <StyledTextField {...configTextField} />;
};

export default TextField;
