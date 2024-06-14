import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Header from "./components/Header";

const Layout = () => {
    return (
        <div className="bg-lime-800 h-screen">
            <div>
                <Header />
            </div>
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};


export default Layout;