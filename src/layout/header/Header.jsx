import { NavLink } from "react-router-dom";
import cls from "./Header.module.css";
import logo from '../../assets/img/Ayana/logo.png'
import pink from '../../assets/img/Ayana/pink.png'


const Header = () => {
    return (
        <div className="container">
            <div className={cls.flex}>
                <NavLink to="/"  className={cls.NavLink} 
                style={({ isActive }) => ({  fontWeight: isActive ? '' : 'normal', textDecoration: 'none',  color: "black" })}>
                    СЛАДКИЕ ДНИ<img src={pink} alt="" />
                </NavLink>
                <select className={cls.select}>
                    <option value="">ПОДАРОЧНЫЕ НАБОРЫ</option>
                    <option value="">ПОДАРОЧНЫЕ НАБОРЫ</option>
                    <option value="">ПОДАРОЧНЫЕ НАБОРЫ</option>
                </select>
                <NavLink to="/"   className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                textDecoration: 'none', color: "black" })}>
                    СОБРАТЬ НАБОР 
                </NavLink>
                <img src={logo} alt="" />
                <NavLink to="/"  className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                textDecoration: 'none', color: "black"  })}>
                    СОЗДАТЬ ДИЗАЙН
                </NavLink>
                <select className={cls.select}>
                    <option value="">КОМПАНИЯ</option>
                    <option value="">КОМПАНИЯ</option>
                    <option value="">КОМПАНИЯ</option>
                </select>
                <select className={cls.select}>
                    <option value="">ВЕСЬ КАТАЛОГ</option>
                    <option value="">ВЕСЬ КАТАЛОГ</option>
                    <option value="">ВЕСЬ КАТАЛОГ</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
