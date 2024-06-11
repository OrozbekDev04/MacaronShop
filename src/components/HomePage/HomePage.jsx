
import macaronLove from '../../assets/img/Orozbek/Macaron-Love (1).png'
import Line from "../../assets/svg/Orozbek/-.jsx";
import {styled} from "@mui/material";
import ColorGreen from "../../assets/svg/Orozbek/ColorGreen.svg";
import ColorYellow from "../../assets/svg/Orozbek/ColorYellow.svg";
const HomePage = () => {
    return (
        <HomeMain className="container bg-green-400">
            <DivMain>
                <ImageContainer>
                    <img src={macaronLove} alt="Macaron-Love.png"/>
                    <div>

                    </div>
                </ImageContainer>
                <div>
                    <Main>
                        <MainP>Macaronshop</MainP>
                        <MainGr>
                            <MainGrSpan><Line/></MainGrSpan>
                            <MainGrP>since 2013 </MainGrP>
                            <MainGrSpan><Line/></MainGrSpan>
                        </MainGr>
                        <MainH2>
                            Настоящая любовь
                        </MainH2>
                        <MainTitle>
                            Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью
                        </MainTitle>
                        <Colors>
                            <img style={{position:"absolute"}} src={ColorGreen} alt=""/>
                            <img style={{position:"absolute"}} src={ColorYellow} alt=""/>
                        </Colors>
                    </Main>
                </div>
            </DivMain>

        </HomeMain>
    );
};

export default HomePage;

const HomeMain = styled('div') (() => ({
    background:"rgba(247, 247, 247, 1)"

}))

const DivMain  = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    background: "#F7F7F7",
    height:"475px",
    marginTop : "100px",

}));



const Main = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    marginBottom: "50px",
    background: "rgba(247, 247, 247, 1)",


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
    img:{
        filter: "drop-shadow(-50px 35px 80px pink) drop-shadow(50px -15px 80px rgba(111, 217, 251, 0.6))",
        width: "100%",
        maxHeight: "422px",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "10px",
        maxWidth: "422px",

    }
}))

const Colors = styled ("div")(() => ({
    width: "50px",
    height: "50px",
    position: "absolute",
    top:0
    }))