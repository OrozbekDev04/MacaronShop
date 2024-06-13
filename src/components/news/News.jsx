import React from "react";
import MainFall from "../../assets/img/Mainfall.png";
import Contest from "../../assets/img/Contest.png";
import Express from "../../assets/img/Express.png";
const News = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-[40px] mt-[85px]">Новости</h1>
      <div className="flex gap-[30px] justify-center mb-[30px]">
        <div className="w-[370px] border-2 rounded-md ">
          <img className="mb-[20px]" src={MainFall} alt="" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">25.10.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Скоро главный праздник весны!
            </h4>
            <p className="text-gray-500">
              Девушки любят, когда вкусно, красиво и натурально. Смотрите больше
              наборов с десертами ручной работы
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <img className="mb-[20px]" src={Contest} alt="" />
          <div className="w-[330px] m-auto">
            <p className="text-gray-400 mb-[10px]">17.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Конкурс на 23 февраля!
            </h4>
            <p className="text-gray-500">
              День Защитника Отечества уже совсем скоро! Порадуйте своего
              сладкоежку с помощью аппетитных наборов от МакаронШоп
            </p>
          </div>
        </div>
        <div className="w-[370px] border-2 rounded-md ">
          <img className="mb-[20px]" src={Express} alt="" />
          <div className="w-[330px] m-auto mb-[20px]">
            <p className="text-gray-400 mb-[10px]">11.02.2023</p>
            <h4 className="text-xl font-medium mb-[10px]">
              Экспресс-конкурс ко дню Святого Валентина
            </h4>
            <p className="text-gray-500">
              Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи
              о своих чувствах с помощью сладкой валентинки от МакаронШоп
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[35px]">
      <button className="border-2 border-cyan-500 px-[40px] py-[10px]">Все новости</button>
      </div>
    </div>
  );
};

export default News;
