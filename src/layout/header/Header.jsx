// Header.js
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Popper, Box, Paper } from '@mui/material';
import cls from "./Header.module.css";
import logo from '../../assets/img/Ayana/logo.png';
import pink from '../../assets/img/Ayana/pink.png';
import Vector from '../../assets/svg/Ayana/Vector.svg';

const options1 = ['Все наборы', <hr className='w-[220px] ' />, 'День медика', <hr className='w-[220px] ' />, 'День рождения', <hr className='w-[220px] ' />, 'Детские праздники'];
const options2 = ['Оптовые постаки', <hr className='w-[220px] ' />, 'Корпаративная подарки', <hr className='w-[220px] ' />, 'Эклеры оптом'];
const options3 = ['МАКАРОН', <hr className='w-[220px] ' />, 'ЭКЛЕРЫ', <hr className='w-[220px] ' />, 'ПОДАРОЧНЫЕ НАБОРЫ', <hr className='w-[220px] ' />, 'ВАФЕЛЬНЫЕ ТРУБОЧКИ', <hr className='w-[220px] ' />, 'ЗЕФИР', <hr className='w-[220px] ' />, 'КЕЙК-ПОПСЫ', <hr className='w-[220px] ' />, 'ДЕСЕРТ КАРТОШКА', <hr className='w-[220px] ' />, 'КОМБО-НАБОРЫ'];

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
                <Box p={2} className={cls.popperBox}>
                    <ul className="">
                        {options.map((option, index) => (
                            <li key={index} className="uppercase py-1 ">
                                <NavLink className="my-[20px]" to="/">{option}</NavLink>

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
                        <img src={Vector} alt="vector" />
                    </div>

                    {renderPopper('first', 'ПОДАРОЧНЫЕ НАБОРЫ', options1)}

                </div>
                <NavLink to="/" className={cls.navLink}
                    style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>
                    СОБРАТЬ НАБОР
                </NavLink>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
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
                        <img src={Vector} alt="vector" />
                    </div>
                    {renderPopper('second', 'КОМПАНИЯ', options2)}
                </div>
                <div
                    onMouseEnter={(e) => handleMouseEnter(e, 'third')}
                    onMouseLeave={() => handleMouseLeave('third')}
                >
                    <div className="flex items-center gap-[5px]">
                        <p className={cls.selectTrigger}>ВЕСЬ КАТАЛОГ</p>
                        <img src={Vector} alt="vector" />
                    </div>
                    {renderPopper('third', 'ВЕСЬ КАТАЛОГ', options3)}
                </div>
            </div>
        </div>
    );
};

export default Header;
