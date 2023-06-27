import TextField from "../../text-field/primary";
import { useField, useFormikContext } from "formik";
import StyledAutoComplete from "../styled/StyledAutoComplete";

const SingleValue = ({ name, options, ...otherProps }) => {
    const { setFieldValue, values } = useFormikContext();
    const [field, meta] = useField(name);

    const selectedValue = values[name];

    const handleChange = (evt, value) => {
        setFieldValue(name, value ? value.value : "");
    };

    const configAutoComplete = {
        options,
        onChange: handleChange,
        value: options.find((option) => option.value === selectedValue) || null,
    };

    const configTextField = {
        ...field,
        ...otherProps,
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <StyledAutoComplete
            {...configAutoComplete}
            renderInput={(params) => <TextField {...params} {...configTextField} />}
        />
    );
};

export default SingleValue;
