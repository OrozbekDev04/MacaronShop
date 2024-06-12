import SaleRed from "../../../../assets/svg/Orozbek/suggestion/SaleFlagRed.svg";
// import SaleBlue from "../../../assets/svg/Orozbek/SaleFlagBlue.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import {styled} from "@mui/material";
import {sale} from "../../../../utils/constants.js";

const SwiperSale = () => {
    return (
        <div>
            <SaleName>Акции</SaleName>
            <CardFlex>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {sale.map((el) => (

                        <>
                            <SwiperSlide>

                                <SaleCard>

                                    <CardDivTitle>
                                        <p>{el.delivery}</p>
                                        <img src={SaleRed} alt=""/>
                                    </CardDivTitle>

                                    <SaleCardImg src={el.img} alt={el.alt}/>
                                    <SaleCardIn>
                                        <p>{el.text}</p>
                                    </SaleCardIn>
                                </SaleCard>
                            </SwiperSlide>

                        </>
                    ))}

                </Swiper>


            </CardFlex>
        </div>

    );
};

export default SwiperSale;

const SaleName = styled("p")(() => ({
    fontFamily:"Montserrat",
    fontSize: "30px",
    fontWeight:600,
    color:"#292929",
    textAlign:"center",
    paddingBottom: "50px",
    paddingTop: "94px",
}))

const SaleCard = styled('div')(() => ({
    position: "relative",
    width: "270px",
    height: "380px",
    background: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(0, 0, 0, 0.125)",
    borderRadius: "10px",
}))

const SaleCardImg = styled('img')(() => ({
    width: "270px",
    height: "270px",
    objectFit: "cover",
    objectPosition: "center",
}))



const CardDivTitle = styled('p')(() => ({
    position: "absolute",
    display: "flex",
    justifyContent:"space-between",

    p:{
        fontFamily:"Proxima Nova",
        fontSize: "16px",
        fontWeight:500,
        color:"#fff",
        textAlign:"center",
        width: "200px",
        height: "20px",
        background: "rgba(255, 77, 109, 1)",
    }
}))



const CardFlex = styled('div')(() => ({
    display: "flex",
    alignItems: "center",
    // gap:"30px",
    // paddingBottom:"142x",
}))


const SaleCardIn = styled('div')(() => ({
    width: "270px",
    height: "110px",
    background: "rgba(255, 77, 109, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p:{
        fontFamily:"Montserrat",
        fontSize: "16px",
        fontWeight:600,
        color:"#fff",
        textAlign:"center",
        width: "230px",
        height: "60px",
        // background: "rgba(255, 77, 109, 1)",

    }
}))