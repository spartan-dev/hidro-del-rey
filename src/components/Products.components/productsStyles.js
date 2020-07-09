import styled from 'styled-components'

const MainContainer = styled.div`
display:flex;
@media(max-width:768px){
  display:none;
}
`
const GridContainer = styled.div`
display:none;
    @media (max-width: 768px) {
    display: block;
  }
`
const BottonSection = styled.section`
width:fit-content;
margin-right:2em;
.active > BigButton{
  background:red
}
`
const CardSection = styled.section`
width:max-content;
`
const BigButton = styled.div`
width: 350px;
height: 132px;
background:${props => props.visible ? "rgba(218, 168, 66, 0.72)":"#ffffff"};
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.16), 0px 2px 5px rgba(0, 0, 0, 0.26);
font-family: Vollkorn SC;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 50px;
text-align: center;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
cursor:pointer;


/* &:hover{background: rgba(218, 168, 66, 0.72);} */
`
const TextAsideContainer = styled.div`
margin-top:3.3em;
width: 365px;
height: 423px;
`
const AsideTextSection = styled.section`
margin-top:2em;
font-family: Vollkorn SC;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 50px;
text-align: center;
color: #000000;
`
const AllCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left:${props => props.oneCard? "2em":"0px"};
`

export {
  MainContainer,
  BottonSection, 
  BigButton, 
  CardSection,
  TextAsideContainer,
  AsideTextSection,
  AllCardsContainer,
  GridContainer
}