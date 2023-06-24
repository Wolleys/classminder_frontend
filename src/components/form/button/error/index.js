import StyledErrorBtn from "../styled/StyledErrorBtn";

const ErrorBtn = ({ children, ...otherProps }) => {
    const configButton = {
        size: "small",
        ...otherProps,
        variant: "contained",
        disableElevation: true,
    };
    return <StyledErrorBtn {...configButton}>{children}</StyledErrorBtn>;
};

export default ErrorBtn;
