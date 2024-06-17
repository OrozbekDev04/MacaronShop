import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import HeaderTop from "../header/HeaderTop.jsx";
import Sliders from "../../components/Slider/Slider.jsx";
import App from "../../UI/K/App.jsx";

const Layout = () => {
    return (
        <>
        <Sliders/>
         <HeaderTop/>
            <Header/>
            <Outlet/>
            <App/>
            <Footer/>
        </>
    );
};

export default Layout;