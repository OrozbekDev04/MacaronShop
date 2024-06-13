
import {styled} from "@mui/material";
import Suggestion from "./HomeComponents/Suggestion/Suggestion.jsx";
import LoveMain from "./HomeComponents/LoveMain/LoveMain.jsx";
import SwiperSale from "./HomeComponents/Swiper/SwiperSale.jsx";
import Holidays from "../holidays/Holidays.jsx";
import News from "../news/News.jsx";
import TaceCare from "../taceCare/TaceCare.jsx";


const HomePage = () => {
    return (
        <HomeContainer className="container">

            <div><LoveMain/></div>
            <div><Suggestion/></div>
            <div><SwiperSale/></div>
            <div><Holidays/></div>
            <div><News/></div>
            <div><TaceCare/></div>

        </HomeContainer>
    );
};

export default HomePage;


const HomeContainer = styled('div')(() => ({
    background: "rgba(247, 247, 247, 1)",

}))




