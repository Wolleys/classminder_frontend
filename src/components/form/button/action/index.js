import StyledBtn from "../styled/StyledBtn";

const ActionBtn = ({ children, ...otherProps }) => {
    const configButton = {
        size: "small",
        ...otherProps,
        variant: "contained",
        disableElevation: true,
    };
    return <StyledBtn {...configButton}>{children}</StyledBtn>;
};

export default ActionBtn;
