import {NavLink, useNavigate} from "react-router-dom";
import cls from "./Header.module.css";

const HeaderTop = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  }

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

            <select onChange={handleSelectChange} defaultValue="">
              <option value="" disabled>login</option>
              <option value="/signUp">SignUp</option>
              <option value="/signIn">SignIn</option>
            </select>

            {/*<NavLink to="" className={cls.phoneLink}>0704110383</NavLink>*/}
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Корзинка</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
