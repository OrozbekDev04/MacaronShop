import macaronLove from "../../../../assets/img/Orozbek/Macaron-Love (1).png";
import Ponchick1 from "../../../../assets/img/Orozbek/Love-gr/ponchik/ponchik1.svg";
import Grai1 from "../../../../assets/img/Orozbek/Love-gr/grain/grain1.svg";
import Ponchick2 from "../../../../assets/img/Orozbek/Love-gr/ponchik/ponchik2.svg";
import Leaf1 from "../../../../assets/img/Orozbek/Love-gr/leaf/leaf1.svg";
import Grai2 from "../../../../assets/img/Orozbek/Love-gr/grain/grain2.svg";
import Ponchick3 from "../../../../assets/img/Orozbek/Love-gr/ponchik/ponchik4.svg";
import Grai3 from "../../../../assets/img/Orozbek/Love-gr/grain/grain3.svg";
import Grai4 from "../../../../assets/img/Orozbek/Love-gr/grain/grain4.svg";
import Ponchick4 from "../../../../assets/img/Orozbek/Love-gr/ponchik/ponchik3.svg";
import Leaf2 from "../../../../assets/img/Orozbek/Love-gr/leaf/leaf2.svg";
import Grai5 from "../../../../assets/img/Orozbek/Love-gr/grain/grain5.svg";
import Ponchick5 from "../../../../assets/img/Orozbek/Love-gr/ponchik/ponchik5.svg";
import Grai6 from "../../../../assets/img/Orozbek/Love-gr/grain/grain6.svg";
import Line from "../../../../assets/svg/Orozbek/-.jsx";
import {styled} from "@mui/material";

const LoveMain = () => {
    return (
        <DivMain>
            <ImageContainer>
                <ImageContainerImg src={macaronLove} alt="Macaron-Love.png"/>
                <div>
                    <IconAround src={Ponchick1} top={25} left={-40} />
                    <IconAround src={Grai1} top={3} left={130} />
                    <IconAround src={Ponchick2} top={14} left={390} />
                    <IconAround src={Leaf1} top={140} left={440} />
                    <IconAround src={Grai2} top={230} left={395} />
                    <IconAround src={Ponchick3} top={290} left={395} />
                    <IconAround src={Grai3} top={350} left={350} />
                    <IconAround src={Grai4} top={355} left={125} />
                    <IconAround src={Ponchick4} top={360} left={35} />
                    <IconAround src={Leaf2} top={275} left={-30} />
                    <IconAround src={Grai5} top={360} left={-55} />
                    <IconAround src={Ponchick5} top={180} left={-140} />
                    <IconAround src={Grai6} top={150} left={-50} />
                </div>
            </ImageContainer>
            <Main>
                <MainP>Macaronshop</MainP>
                <MainGr>
                    <MainGrSpan><Line/></MainGrSpan>
                    <MainGrP>since 2013 </MainGrP>
                    <MainGrSpan><Line/></MainGrSpan>
                </MainGr>
                <MainH2 className="">
                    Настоящая любовь
                </MainH2>
                <MainTitle>
                    Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью
                </MainTitle>
                <Highlight color="rgba(152, 224, 194, 0.38)" top={40} size={230} right={-220} zIndex={0}/>
                <Highlight color="rgba(255, 252, 189, 0.45)" top={180} size={250} right={-290} zIndex={0}/>
            </Main>

        </DivMain>

    );
};

export default LoveMain;

const DivMain  = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent:"space-evenly",
    background: "#F7F7F7",
    height:"475px",
    marginTop : "100px",

}));



const Main = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    marginBottom: "50px",
    zIndex: 100,
    position: "relative",

}))

const MainP = styled("p")(() => ({
    fontSize: "22px",
    fontWeight: 600,
    color: "#292929",
    fontFamily:"Montserrat"
}))

const MainGr = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    gap: "9px",
    fontFamily:"Montserrat",


}))

const MainGrSpan = styled("span")(() => ({
    paddingBottom: "8px",
}))

const MainGrP = styled("p")(() => ({
    color: "#292929",
    fontSize: "16px",
    fontWeight: 600,
    textAlign: "center",

}))

const MainH2 = styled("h2")(() => ({
    fontFamily:"Montserrat",
    fontWeight: 600,
    fontSize: "42px",
    color: "#292929",
    marginTop: "24px",
    textAlign: "center",
    width: "431px",
}))

const MainTitle = styled("h1")(() => ({
    fontFamily:"Proxima Nova",
    fontWeight: 400,
    fontSize: "18px",
    color: "#292929",
    width:"499px",
    marginTop: "13px",
    textAlign: "center",

}))

const ImageContainer = styled("div") (() => ({
    position: "relative",

}))

const ImageContainerImg = styled( "img") (( ) => ({
    filter: "drop-shadow(-50px 35px 80px pink) drop-shadow(50px -15px 80px rgba(111, 217, 251, 0.6))",
    width: "100%",
    maxHeight: "422px",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "10px",
    maxWidth: "422px",
}))

const Highlight = styled("div") (({color,top,right,size,zIndex}) => ({
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: color,
    filter: "blur(50px)",
    width: `${size}px`,
    height: `${size}px`,
    top: top,
    zIndex:`${zIndex}`,
    right: right,
    transform: "translate(-50%, -50%)",
}))

const IconAround = styled("img") (({top,left}) => ({
    position: "absolute",
    top: top,
    left: left,
    // transform: "translate(-50%, -50%)",
}))