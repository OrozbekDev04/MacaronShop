import React from "react";
import cap from "../../assets/svg/cap.svg";
import cookie from "../../assets/svg/cookie.svg";
import blueCookie from "../../assets/svg/blueCookie.svg";
import pinkCookie from "../../assets/svg/pinkCookie.svg";

const Holidays = () => {
  return (
    <div>
      <div className="mt-[142px]">
        <h1 className="text-center text-4xl font-medium">
          Ближайшие праздники
        </h1>

        <div className=" relative z-10 top-[140px] left-3  w-[90%] border-t border-dashed border-gray-300 mx-auto"></div>

        <div className="flex w-[89%] mx-auto">
          <div className="w-[250px] relative z-30">
            <div data-aos="zoom-in-up">
            <div className="ml-[80px] ">
              <img
                className=" top-[40px] left-[37px] relative  z-30"
                src={cap}
                alt=""
              />
              <img src={cookie} alt="" />
            </div>
            <p className=" font-semibold  text-center">
              Скоро <br /> День рождения <br /> близкого человека
            </p>
          </div>
          </div>
          <div className="w-[250px] top-[110px] relative z-30">
            <div data-aos="zoom-in-up">

            <div className="ml-[80px] mb-[5px]">
              <img src={blueCookie} alt="" />
            </div>
            <p className=" font-semibold  text-center">
              1 января <br /> Новый Год <br /> 2021
            </p>
            </div>
          </div>
          <div className="w-[250px] top-[110px] relative z-30">
            <div data-aos="zoom-in-up">

            <div className="ml-[80px] mb-[10px]">
              <img src={pinkCookie} alt="" />
            </div>
            <p className=" font-semibold  text-center">
              14 февраля <br /> День Святого <br /> Валентина
            </p>
            </div>
          </div>
          <div className="w-[250px] top-[110px] relative z-30">
            <div data-aos="zoom-in-up">

            <div className="ml-[80px] mb-[10px]">
              <img className="w-[70px] rotate-[-35deg]" src={cookie} alt="" />
            </div>
            <p className=" font-semibold  text-center">
              14 февраля <br /> День Святого <br /> Валентина
            </p>
              </div>
          </div>
          <div className="w-[250px] top-[110px] relative z-30">
            <div data-aos="zoom-in-up">

            <div className="ml-[80px] mb-[5px]">
              <img className=" rotate-[30deg]" src={blueCookie} alt="" />
            </div>
            <p className=" font-semibold  text-center">
              8 марта <br /> Международный <br /> Женский День
            </p>
              </div>
          </div>
          <div className="w-[250px] top-[110px] relative z-30">
            <div data-aos="zoom-in-up">

            <div className="ml-[80px] mb-[5px]">
              <img className=" rotate-[-30deg]" src={pinkCookie} alt="" />
            </div>
            <p className=" font-semibold  text-center">
              8 марта <br /> Международный <br /> Женский День
            </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
