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
width:100%;
display: flex;
justify-content:center;
    padding: 5px;
    margin: 5px;
    
`
const QtyButton = styled.button`
  padding: 0.4rem;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
`
const QtySelect = styled.div`
  display: flex;
  border: 1px solid #000000;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 3px;
  height:35px;
  margin-right:2em;
  button {
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 10px;
    background-color: transparent;
    max-width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
   border:none;
  }
  input {
    padding: 0.4rem;
    background-color: transparent;
    border:none;
    /* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
    max-width: 40px;
    max-height: 40px;
    font-family: Vollkorn SC;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #000000;
  }
`

export {
  ContainerCard,
  CardImage, 
  CardTitle, 
  CardInfo, 
  CardButtonContainer,
  QtyButton,
  QtySelect

}