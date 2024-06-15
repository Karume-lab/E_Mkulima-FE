import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
    return (
        <div className="bg-lime-800 h-screen">
            <div>
                <Header />
            </div>
            <Outlet />
        </div>
    );
};


export default Layout;