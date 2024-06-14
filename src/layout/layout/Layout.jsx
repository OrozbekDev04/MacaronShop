import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import HeaderTop from "../header/HeaderTop.jsx";
import Sliders from "../../components/Slider/Slider.jsx";

const Layout = () => {
    return (
        <>
        <Sliders/>
         <HeaderTop/>
            <Header/>
                 <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;