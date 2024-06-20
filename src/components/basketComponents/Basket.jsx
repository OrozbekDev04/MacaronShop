import React from "react";
import { useNavigate } from "react-router-dom";
import Kit from "../../assets/img/Kit.png";

const Basket = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-[10px] justify-center mt-[35px]">
        <p
          className="text-blue-400 cursor-pointer"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Главная
        </p>
        <p>»</p>
        <p>Корзина</p>
      </div>
      <h1 className="text-center mt-[20px] text-3xl font-semibold">
        Ваша Корзина
      </h1>
      <p className="text-center text-gray-400 mt-[10px] mb-[34px]">
        3 товара / 1030 руб.
      </p>
      <div className="flex ">
        <div>
          <div className="border-2 mb-[30px] rounded-md flex justify-between h-[200px] w-[900px]">
            <div className="flex">
              <img className="pl-[17px] py-[40px]" src={Kit} alt="" />
              <div className="mt-[20px] ml-[15px]">
                <h4 className="text-xl font-semibold">Набор макарон 12 шт.</h4>
                <p className="w-[120px] text-sm text-gray-500">
                  Трюфель 2 шт. Розмарин 3 шт. Ананас 1 шт. Кокос 4 шт.
                </p>
                <p className=" mt-[10px] text-[#E7426A]">
                  Скидка по акции “Эклер в подарок”
                </p>
              </div>
            </div>
            <div className="flex items-center ml-[100px] gap-[10px]">
              <button className="border-2 px-[10px] text-2xl py-[-2px] rounded-md ">
                -
              </button>
              <p>1</p>
              <button className="border-2 px-[8px] text-2xl py-[-2px] rounded-md ">
                +
              </button>
            </div>
            <div>
              <p className="text-end mt-[10px] text-gray-400 mr-[14px]">✕</p>
              <div className="mr-[32px] mt-[68px] font-semibold">
                <p className="">
                  Цена:<span className="text-[#E7426A]">950руб.</span>
                </p>
                <p className="mt-[35px]">
                  Скидка:
                  <span className="text-[#e7426a]">-30руб</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 mb-[30px] rounded-md flex justify-between h-[200px] w-[900px]">
            <div className="flex">
              <img className="pl-[17px] py-[40px]" src={Kit} alt="" />
              <div className="mt-[20px] ml-[15px]">
                <h4 className="text-xl font-semibold">Набор макарон 12 шт.</h4>
                <p className="w-[120px] text-sm text-gray-500">
                  Трюфель 2 шт. Розмарин 3 шт. Ананас 1 шт. Кокос 4 шт.
                </p>
                <p className=" mt-[10px] text-[#E7426A]">
                  Скидка по акции “Эклер в подарок”
                </p>
              </div>
            </div>
            <div className="flex items-center ml-[100px] gap-[10px]">
              <button className="border-2 px-[10px] text-2xl py-[-2px] rounded-md ">
                -
              </button>
              <p>1</p>
              <button className="border-2 px-[8px] text-2xl py-[-2px] rounded-md ">
                +
              </button>
            </div>
            <div>
              <p className="text-end mt-[10px] text-gray-400 mr-[14px]">✕</p>
              <div className="mr-[32px] mt-[68px] font-semibold">
                <p className="">
                  Цена:<span className="text-[#E7426A]">950руб.</span>
                </p>
                <p className="mt-[35px]">
                  Скидка:
                  <span className="text-[#e7426a]">-30руб</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 mb-[30px] rounded-md flex justify-between h-[200px] w-[900px]">
            <div className="flex">
              <img className="pl-[17px] py-[40px]" src={Kit} alt="" />
              <div className="mt-[20px] ml-[15px]">
                <h4 className="text-xl font-semibold">Набор макарон 12 шт.</h4>
                <p className="w-[120px] text-sm text-gray-500">
                  Трюфель 2 шт. Розмарин 3 шт. Ананас 1 шт. Кокос 4 шт.
                </p>
                <p className=" mt-[10px] text-[#E7426A]">
                  Скидка по акции “Эклер в подарок”
                </p>
              </div>
            </div>
            <div className="flex items-center ml-[100px] gap-[10px]">
              <button className="border-2 px-[10px] text-2xl py-[-2px] rounded-md ">
                -
              </button>
              <p>1</p>
              <button className="border-2 px-[8px] text-2xl py-[-2px] rounded-md ">
                +
              </button>
            </div>
            <div>
              <p className="text-end mt-[10px] text-gray-400 mr-[14px]">✕</p>
              <div className="mr-[32px] mt-[68px] font-semibold">
                <p className="">
                  Цена:<span className="text-[#E7426A]">950руб.</span>
                </p>
                <p className="mt-[35px]">
                  Скидка:
                  <span className="text-[#e7426a]">-30руб</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 mb-[30px] rounded-md flex justify-between h-[200px] w-[900px]">
            <div className="flex">
              <img className="pl-[17px] py-[40px]" src={Kit} alt="" />
              <div className="mt-[20px] ml-[15px]">
                <h4 className="text-xl font-semibold">Набор макарон 12 шт.</h4>
                <p className="w-[120px] text-sm text-gray-500">
                  Трюфель 2 шт. Розмарин 3 шт. Ананас 1 шт. Кокос 4 шт.
                </p>
                <p className=" mt-[10px] text-[#E7426A]">
                  Скидка по акции “Эклер в подарок”
                </p>
              </div>
            </div>
            <div className="flex items-center ml-[100px] gap-[10px]">
              <button className="border-2 px-[10px] text-2xl py-[-2px] rounded-md ">
                -
              </button>
              <p>1</p>
              <button className="border-2 px-[8px] text-2xl py-[-2px] rounded-md ">
                +
              </button>
            </div>
            <div>
              <p className="text-end mt-[10px] text-gray-400 mr-[14px]">✕</p>
              <div className="mr-[32px] mt-[68px] font-semibold">
                <p className="">
                  Цена:<span className="text-[#E7426A]">950руб.</span>
                </p>
                <p className="mt-[35px]">
                  Скидка:
                  <span className="text-[#e7426a]">-30руб</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[100vh]">
          <div className="border-2 sticky top-0 right-0 ml-[20px] bg-white rounded-md w-[450px] ">
            <div className="border-2 border-b-gray-200 border-t-white border-r-white border-l-white pl-[30px]">
              <h4 className="mt-[29px] text-xl font-semibold">Игого</h4>
              <div className="flex gap-[122px] text-gray-500">
                <p className="">
                  Стоимость товаров <br /> Скидка <br /> Доставка
                </p>
                <p className="w-[70px]">700 руб 0 руб 400 руб</p>
              </div>
            </div>
            <div className="flex justify-between border-2 border-b-gray-200 border-t-white border-r-white border-l-white pl-[30px] pb-[17px] mt-[16px]">
              <p className="text-gray-500">К оплате</p>
              <p className="mr-[80px] font-semibold">1100 руб</p>
            </div>
            <div className="flex ml-[30px] mt-[20px] mb-[20px] items-center">
              <p>Промокод:</p>
              <input
                className="border-2 py-[8px] bg-gray-100 outline-none border-r-white "
                placeholder="Введите промокод"
                type="text"
              />
              <button className="bg-[#e7426a] text-white px-[15px] py-[10px]">
                Применить
              </button>
            </div>
            <div className="flex justify-center">
              <button className="mb-[30px] bg-[#e7426a] text-white px-[40px] py-[15px]">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
