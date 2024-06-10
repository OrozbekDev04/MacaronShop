import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
                 <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;