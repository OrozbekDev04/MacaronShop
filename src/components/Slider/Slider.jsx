import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sli from '../../assets/img/Ayana/ sli.png'
import slid from '../../assets/img/Ayana/sliders.png'
import slide from '../../assets/img/Ayana/Копия sliders.png'

const Sliders = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    style: { backgroundColor: '#D4E9F9' },
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={sli} alt="" style={{ display: 'block', margin: '0 auto', height: '30px' }} />
      </div>
      <div>
        <img src={slid} alt="" style={{ display: 'block', margin: '0 auto', height: '40px' }} />
      </div>
      <div>
        <img src={slide} alt="Slide 3" style={{ display: 'block', margin: '0 auto', height: '50px' }} />
      </div>
    </Slider>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1, cursor: 'pointer' }} onClick={onClick}></div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1, cursor: 'pointer' }} onClick={onClick}></div>
  );
};

export default Sliders;