import { useFormikContext } from "formik";
import StyledBtn from "../styled/StyledBtn";

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

    return <StyledBtn {...configButton}>{children}</StyledBtn>;
};

export default SubmitBtn;
