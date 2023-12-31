import { useField } from "formik";
import StyledAuth from "./StyledAuth";

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

    return <StyledAuth {...configTextField} />;
};

export default TextField;
