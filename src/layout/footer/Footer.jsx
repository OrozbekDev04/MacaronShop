import { NavLink } from "react-router-dom";
import car from "../../assets/img/Ayana/car.png"
import heart from "../../assets/img/Ayana/heart.png"
import mendal from "../../assets/img/Ayana/mendal.png"
import inst from "../../assets/img/Ayana/inst.png"
import facebook from "../../assets/img/Ayana/facebook.png"
import vk from "../../assets/img/Ayana/vk.png"
import cls from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={cls.footerBackground}>
        <div className="container">
            <div className={cls.flex}>
                <div className={cls.icon}>
                    <div><img className={cls.heart} src={heart} alt="" /><p className={cls.ptext}>Готовим вручную и <br /> с любовью</p></div>
                    <div><img className={cls.car} src={car} alt="" /><p className={cls.ptext}>Доставимв <br /> день заказа</p></div>
                    <div><img className={cls.mendal} src={mendal} alt="" /><p className={cls.ptext}>100% <br /> миндальная мука <br />и натуральные <br /> ингредиенты</p></div>
                </div>
                <div className={cls.text}>
                    <div className={cls.info}>
                        <h4>ИНФОРМАЦИЯ</h4>
                        <NavLink to="/" className={cls.navLink}   style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>о компании</NavLink>
                        <NavLink to="/" className={cls.navLink}  style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Гарантии вкуса и свежести</NavLink>
                        <NavLink to="/" className={cls.navLink}   style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Доставка и оплата</NavLink>
                        <NavLink to="/" className={cls.navLink}  style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Контакты</NavLink>
                    </div>
                    <div className={cls.info}>
                        <h4>КАТАЛОГ</h4>
                        <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Каталог десертов</NavLink>
                        <NavLink to="/"className={cls.navLink}  style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Готовые наборы</NavLink>
                        <NavLink to="/"className={cls.navLink}  style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Собрать свой набор</NavLink>
                        <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Акции</NavLink>
                    </div>
                    <div className={cls.info}>
                        <h4>ДЛЯ БИЗНЕСА</h4>
                        <NavLink to="/corporete"className={cls.navLink}  style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Корпоративные подарки</NavLink>
                        <NavLink to="/" className={cls.navLink}  style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Для юридических лиц</NavLink>
                        <NavLink to="/"className={cls.navLink}  style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', 
                        textDecoration: 'none', color: "black" })}>Оповикам</NavLink>
                    </div> 
                </div>
                <div className={cls.tel}>
                <a href="tel:0704110383" className={cls.phoneLink}> 0704110383</a>
                <p className={cls.textp}>с 9:00 до 21:00</p>
                <div className={cls.media}>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={inst} alt="Instagram" /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" /></a>
                        <a href="https://www.vk.com" target="_blank" rel="noopener noreferrer">
                            <img src={vk} alt="VK" /></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;




