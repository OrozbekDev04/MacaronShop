import {styled} from "@mui/material";

const SuggestionList = (props) => {

    // eslint-disable-next-line react/prop-types
    const {svg , text , title , icon ,bg} = props;
    return (
        <div>
            <CardDiv style={{backgroundImage: `url(${bg})` }}>
                <Svg src={svg} alt="svg"/>
                <TextDiv>
                    <p>{text} </p>
                    <img src={icon} alt="icon"/>
                </TextDiv>
                <Tiitle>{title}</Tiitle>
            </CardDiv>
        </div>
    );
};

export default SuggestionList;


const CardDiv = styled("div") (() => ({
    width:"570px",
    height:"260px",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    gap:"10px",
    paddingTop:"36px",
}))

const Svg = styled('img')(() => ({

}))

const TextDiv = styled('div') (() => ({
    display:"flex",
    alignItems:"center",
    gap:"13px",
    p:{
        fontFamily:"san-serif , Montserrat",
        fontWeight:600,
        fontsize:"20px",
        color:"#292929"
    }
}))

const Tiitle = styled('p') (() => ({
    fontFamily:"san-serif , Proxima Nova",
    fontWeight:400,
    fontsize:"16px",
    color:"#292929",
    width: "463px",
    textAlign:"center",

}))