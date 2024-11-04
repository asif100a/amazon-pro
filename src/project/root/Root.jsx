import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";

const Root = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    );
};

export default Root;