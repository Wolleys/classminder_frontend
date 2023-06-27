import TextField from "../../text-field/primary";
import { useField, useFormikContext } from "formik";
import StyledAutoComplete from "../styled/StyledAutoComplete";

const MultipleValues = ({ name, options, preFilledValues, ...otherProps }) => {
    const { setFieldValue, values } = useFormikContext();
    const [field, meta] = useField(name);

    const selectedValues = values[name] || [];

    const handleChange = (evt, value) => {
        const selectedValues = value.map((item) => item.value);
        setFieldValue(name, selectedValues);
    };

    const configAutoComplete = {
        options,
        multiple: true,
        onChange: handleChange,
        value: options.filter((option) => selectedValues.includes(option.value)),
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

export default MultipleValues;
