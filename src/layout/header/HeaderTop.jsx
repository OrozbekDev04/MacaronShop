import { NavLink } from "react-router-dom";
import cls from "./Header.module.css";

const HeaderTop = () => {
  return (
    <div className={cls.headerBackground}>
      <div className={cls.container}>
        <div className={cls.Top}>
          <div className={cls.one}>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Гарантия свежести</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Доставка и оплата</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Оптовые поставки</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Контакты</NavLink>
          </div>
          <div className={cls.two}>
            <select>
              <option value="">Санкт-Петербург</option>
              <option value="">Москва</option>
              <option value="">Казань</option>
            </select>
            <a href="tel:0704110383" className={cls.phoneLink}>0704110383</a>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Корзинка</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
