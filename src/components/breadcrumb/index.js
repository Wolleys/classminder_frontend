import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function Breadcrumb() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathName = location.pathname;

    const handleClick = (event, href) => {
        event.preventDefault();
        navigate(href);
    };

    const getBreadcrumbItems = () => {
        const paths = pathName.split("/").filter((path) => path !== "");

        const breadcrumbs = paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`;
            const isCurrentPage = index === paths.length - 1;

            return (
                <Link
                    underline="hover"
                    key={index}
                    color={isCurrentPage ? "text.primary" : "inherit"}
                    href={isCurrentPage ? undefined : href}
                    onClick={(event) => handleClick(event, href)}
                    sx={{ textTransform: "capitalize", cursor: "pointer" }}
                >
                    {isCurrentPage ? path : path}
                </Link>
            );
        });

        return breadcrumbs;
    };

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            {getBreadcrumbItems()}
        </Breadcrumbs>
    );
}

export default Breadcrumb;
