import { useFormikContext } from "formik";
import StyledButtons from "../styled";

const SubmitBtn = ({ children, ...otherProps }) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    };

    const configButton = {
        size: "small",
        ...otherProps,
        variant: "contained",
        onClick: handleSubmit,
        disableElevation: true,
    };

    return <StyledButtons {...configButton}>{children}</StyledButtons>;
};

export default SubmitBtn;
