import React from "react";
import BestIngredients from "../../assets/img/BestIngredients.png";
import Package from "../../assets/img/Package.png"
import Receiving from "../../assets/img/Receiving.png"
import Anonymous from "../../assets/img/Anonymous.png"

const TaceCare = () => {
  return (
    <div className="mt-[85px]">
      <h1 className="text-4xl mb-[40px] text-center">
        Мы обо всём позаботились
      </h1>
      <div className="flex mb-[37px] justify-between">
        <div className="w-[270px]">
          <img src={BestIngredients} alt="" />
          <h4 className="text-xl mt-[29px]">Лучшие ингредиенты</h4>
          <p className="text-sm pb-[30px] text-gray-500 mt-[11px]">
            Что-то про суперкачество, лучших поваров, свежесть и т.д.
          </p>
        </div>
        <div className="w-[270px]">
          <img src={Package} alt="" />
          <h4 className="text-xl mt-[29px]">Упаковка</h4>
          <p className="text-sm text-gray-500 mt-[11px]">
          Что-то про суперкоробочки и бантики и бла бла бла
          </p>
        </div>
        <div className="w-[270px]">
          <img src={Receiving} alt="" />
          <h4 className="text-xl mt-[29px]">Получение в день заказа</h4>
          <p className="text-sm text-gray-500 mt-[11px]">
          В день заказа доставка курьером или самовывоз
          </p>
        </div>
        <div className="w-[270px]">
          <img src={Anonymous} alt="" />
          <h4 className="text-xl mt-[29px]">Анонимная доставка</h4>
          <p className="text-sm text-gray-500 mt-[11px]">
          Можем преподнести Ваш заказ как анонимный подарок
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaceCare;
