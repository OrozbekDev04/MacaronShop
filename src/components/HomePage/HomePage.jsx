
import {styled} from "@mui/material";
import Suggestion from "./HomeComponents/Suggestion/Suggestion.jsx";
import LoveMain from "./HomeComponents/LoveMain/LoveMain.jsx";
import SwiperSale from "./HomeComponents/Swiper/SwiperSale.jsx";


const HomePage = () => {
    return (
        <HomeContainer>
            <div className="container ">
                <LoveMain/>
            </div>
            <div>
                <Suggestion/>
            </div>
            <div>
                <SwiperSale/>
            </div>
        </HomeContainer>
    );
};

export default HomePage;


const HomeContainer = styled('div')(() => ({
    background: "rgba(247, 247, 247, 1)",

}))




