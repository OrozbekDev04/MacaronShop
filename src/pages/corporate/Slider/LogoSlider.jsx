import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bank from "../../../assets/img/Ayana/company/bank.png";
import zeni from "../../../assets/img/Ayana/company/zeni.png";
import m from "../../../assets/img/Ayana/company/m.png";
import mvideo from "../../../assets/img/Ayana/company/mvideo.png";
import gazprom from "../../../assets/img/Ayana/company/gazprom.png";
import larina from "../../../assets/img/Ayana/company/larina.png";
import './logo.module.css';

const logos = [bank, zeni, m, mvideo, gazprom, larina];

const LogoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LogoSlider;




