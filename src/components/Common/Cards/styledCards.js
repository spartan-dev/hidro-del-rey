import styled from 'styled-components'

const ContainerCard = styled.div`
margin-bottom:3em;
width: 20em;
height: 39em;
background: #FFFFFF;
box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.24), 0px 17px 50px rgba(0, 0, 0, 0.19);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
span{
  font-family: Vollkorn SC;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 33px;
text-align: center;

color: #000000;
}
`
const CardImage = styled.div`
width: inherit;
height: inherit;

`
const CardTitle = styled.h3`
font-family: Vollkorn SC;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 10px;
text-align: center;
color: #000000;
margin-top:20px;
margin-bottom: 0px;

`
const CardInfo = styled.p`
font-family: Vollkorn SC;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
padding:6px;
text-align: center;
color: #000000;

`
const CardButtonContainer = styled.div`
display: flex;
    padding: 5px;
    margin: 5px;
`

export {ContainerCard,CardImage, CardTitle, CardInfo, CardButtonContainer}