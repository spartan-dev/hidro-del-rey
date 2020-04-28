import styled from 'styled-components'

const MainContainer = styled.div`
display:flex;
`
const BottonSection = styled.section`
width:50%;
`
const CardSection = styled.section`
width:50%;
`
const BigButton = styled.div`
width: 350px;
height: 132px;
background: #FFFFFF;
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
export {
  MainContainer,
  BottonSection, 
  BigButton, 
  CardSection,
  TextAsideContainer,
  AsideTextSection
}