// Header.js
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Popper, Box, Paper } from '@mui/material';
import cls from "./Header.module.css";
import logo from '../../assets/img/Ayana/logo.png';
import pink from '../../assets/img/Ayana/pink.png';
import Vector from '../../assets/svg/Ayana/Vector.svg';

const options1 = ['Все наборы', 'День медика', 'День рождения', 'Детские праздники'];
const options2 = ['Оптовые постаки', 'Корпаративная подарки', 'Эклеры оптом'];
const options3 = ['МАКАРОН', 'ЭКЛЕРЫ', 'ПОДАРОЧНЫЕ НАБОРЫ', 'ВАФЕЛЬНЫЕ ТРУБОЧКИ', 'ЗЕФИР', 'КЕЙК-ПОПСЫ', 'ДЕСЕРТ КАРТОШКА', 'КОМБО-НАБОРЫ'];

const Header = () => {
    const [open, setOpen] = useState({ first: false, second: false, third: false });
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMouseEnter = (event, modal) => {
        setAnchorEl(event.currentTarget);
        setOpen(prev => ({ ...prev, [modal]: true }));
    };

    const handleMouseLeave = (modal) => {
        setOpen(prev => ({ ...prev, [modal]: false }));
    };

    const renderPopper = (modal, title, options) => (
        <Popper open={open[modal]} anchorEl={anchorEl} placement="bottom-start" disablePortal className={cls.popper}>
            <Paper
                onMouseEnter={() => handleMouseEnter({ currentTarget: anchorEl }, modal)}
                onMouseLeave={() => handleMouseLeave(modal)}
            >
                <Box p={2}  className={cls.popperBox}>
                    <ul className="">
                        {options.map((option, index) => (
                            <li key={index} className="uppercase py-1 border-b">
                                <NavLink to="/">{option}</NavLink>
                            </li>
                        ))}
                    </ul>

                </Box>
            </Paper>
        </Popper>
    );

    return (
        <div className="container">
            <div className={cls.flex}>
                <NavLink to="/" className={cls.NavLink}
                         style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>
                    СЛАДКИЕ ДНИ <img src={pink} alt="" />
                </NavLink>
                <div
                    onMouseEnter={(e) => handleMouseEnter(e, 'first')}
                    onMouseLeave={() => handleMouseLeave('first')}
                >
                    <div className="flex items-center gap-[5px]">
                        <p className={cls.selectTrigger}>ПОДАРОЧНЫЕ НАБОРЫ</p>
                        <img src={Vector} alt="vector"/>
                    </div>

                    {renderPopper('first', 'ПОДАРОЧНЫЕ НАБОРЫ', options1)}

                </div>
                <NavLink to="/" className={cls.navLink}
                         style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>
                    СОБРАТЬ НАБОР
                </NavLink>
                <img src={logo} alt="" />
                <NavLink to="/" className={cls.navLink}
                         style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>
                    СОЗДАТЬ ДИЗАЙН
                </NavLink>
                <div
                    onMouseEnter={(e) => handleMouseEnter(e, 'second')}
                    onMouseLeave={() => handleMouseLeave('second')}
                >
                    <div className="flex items-center gap-[5px]">
                        <p className={cls.selectTrigger}>КОМПАНИЯ</p>
                        <img src={Vector} alt="vector"/>
                    </div>
                    {renderPopper('second', 'КОМПАНИЯ', options2)}
                </div>
                <div
                    onMouseEnter={(e) => handleMouseEnter(e, 'third')}
                    onMouseLeave={() => handleMouseLeave('third')}
                >
                    <div className="flex items-center gap-[5px]">
                        <p className={cls.selectTrigger}>ВЕСЬ КАТАЛОГ</p>
                        <img src={Vector} alt="vector"/>
                    </div>
                    {renderPopper('third', 'ВЕСЬ КАТАЛОГ', options3)}
                </div>
            </div>
        </div>
    );
};

export default Header;
