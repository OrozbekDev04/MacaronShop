
import {styled} from "@mui/material";
import Suggestion from "../HomePage/HomeComponents/Suggestion/Suggestion.jsx";
import LoveMain from '../HomePage/HomeComponents/LoveMain/LoveMain.jsx'
import SwiperSale from '../HomePage/HomeComponents/Swiper/SwiperSale.jsx'
import News from '../news/News.jsx'


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
            <div>
                <News/>
            </div>
        </HomeContainer>
    );
};

export default HomePage;


const HomeContainer = styled('div')(() => ({
    background: "rgba(247, 247, 247, 1)",

}))




