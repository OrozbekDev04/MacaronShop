import React, { useState } from 'react';
import macaronOne from "../../assets/img/Kalys/Group 313.png";
import macaronTwo from "../../assets/img/Kalys/Layer 35 1.png";
import macaronDark from "../../assets/img/Kalys/Group 316.png";
import {useNavigate} from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`flex flex-col justify-center items-center h-screen duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-pink-50 text-gray-800'} text-center`}>
            <div className="absolute top-4 right-4">
                <label className="flex items-center">
                    <span className="mr-2">{darkMode ? "Светлый режим" : "Темный режим"}</span>
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="toggle-checkbox" />
                    <span className="toggle-switch"></span>
                </label>
            </div>
            <div className="flex flex-col items-center justify-center relative">
                <h1 className="text-2xl font-medium ">Извините, страница не найдена</h1>
                <p className="text-[250px]  font-bold">4 0 4</p>
                <img src={darkMode ? macaronDark : macaronOne} alt="img" className="absolute"/>
                {!darkMode && <img src={macaronTwo} alt="img" className="absolute top-[90px] left-[190px]"/>}
                <button className="bg-transparent transition hover:bg-[#E7426A] text-[#E7426A] text-lg font-semibold hover:text-white py-[15px] px-[70px] border border-[#E7426A] hover:border-transparent rounded mt-8"
                onClick={() => navigate("/")}>
                    Назад
                </button>
            </div>
        </div>
    );
};

export default Error;
