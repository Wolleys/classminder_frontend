import { Outlet } from "react-router-dom";
import "./css/layout.css";

const Layout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    );
}

export default Layout