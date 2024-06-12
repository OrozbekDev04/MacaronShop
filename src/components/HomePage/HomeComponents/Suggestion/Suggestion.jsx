import SuggestionList from "../../../../UI/SuggestionList.jsx";
import Svg1 from "../../../../assets/svg/Orozbek/suggestion/SuggestionSvg.svg";
import Svg2 from "../../../../assets/svg/Orozbek/suggestion/Suggestion2.svg";
import Svg3 from "../../../../assets/svg/Orozbek/suggestion/Suggestion3.svg";
import Svg4 from "../../../../assets/svg/Orozbek/suggestion/Suggestion4.svg";
import Svg5 from "../../../../assets/svg/Orozbek/suggestion/Suggestion5.svg";
import Svg6 from "../../../../assets/svg/Orozbek/suggestion/Suggestion6.svg";

import Icon from "../../../../assets/svg/Orozbek/suggestion/SuggestionIconVector.svg";

import Bg1 from "../../../../assets/img/Orozbek/suggestionBackground/SuggestionBg1.jpg";
import Bg2 from "../../../../assets/img/Orozbek/suggestionBackground/SuggestionBg2.jpg";
import Bg3 from "../../../../assets/img/Orozbek/suggestionBackground/SuggestionBg3.jpg";
import Bg4 from "../../../../assets/img/Orozbek/suggestionBackground/SuggestionBg4.jpg";
import Bg5 from "../../../../assets/img/Orozbek/suggestionBackground/SuggestionBg5.jpg";
import Bg6 from "../../../../assets/img/Orozbek/suggestionBackground/SuggestionBg6.jpg";


import {styled} from "@mui/material";
const Suggestion = () => {
    return (
        <SuggestionAdmin>
            <SuggestionList  svg={Svg1} text="Готовые наборы" title="Готовые наборы со скидкой.  Вы можете подобрать набор на подходящий случай." icon={Icon} bg={Bg1}/>
            <SuggestionList  svg={Svg2} text="Собрать свой набор" title="Выбрать количество макарун, и выбрать вкусы" icon={Icon} bg={Bg2}/>
            <SuggestionList  svg={Svg3} text="Набор с индивидуальной печатью" title="Собрать набор макарон с уникальным дизайном. " icon={Icon} bg={Bg3}/>
            <SuggestionList  svg={Svg4} text="Свадебные предложения" title="Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества" icon={Icon} bg={Bg4}/>
            <SuggestionList  svg={Svg5} text="Корпоративные подарки" title="От 85 руб за шт. С уникальным дизайном.  Приятный комплимент для коллег и партнеров" icon={Icon} bg={Bg5}/>
            <SuggestionList  svg={Svg6} text="Оптовые поставки" title="Предложение для кофеен, кафе, отелей и т.д.
                                                Посмотрите условия сотрудничества и отзывы." icon={Icon} bg={Bg6}/>
        </SuggestionAdmin>
    );
};

export default Suggestion;

const SuggestionAdmin = styled("SuggestionAdmin")(() => ({
    display: "flex",
    flexWrap:"wrap",
    justifyContent: "center",
    alignItems:"center",
    gap: "30px",
   marginBottom: "30px",
    marginTop: "30px",
}))
