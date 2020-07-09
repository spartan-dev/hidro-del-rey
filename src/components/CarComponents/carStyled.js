import styled from "styled-components"

const ShopCarContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  @media(min-width:769px){
    width:96%;
  }
  @media(min-width:411px){
    width:96%;
  }
/*   @media(max-width:365px){
    width:60%;
  }
   */
`
const ShopCarNav = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  ul {
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media(max-width:375px){
    width:70vw;
  }
  @media(min-width:411px){
    width:70vw;
  }
    li {
      margin-right: 1em;
      padding-right: 2em;
      list-style: none;
      font-family: Vollkorn SC;
      font-style: normal;
      font-weight: normal;
      font-size: 26px;
      line-height: 50px;
      color: #000000;
      @media(max-width:375px){
        font-size: 18px;
      line-height: 30px;
      margin-right: 15px;
      padding-right: 2px;
  }
  @media(min-width:411px){
    font-size: 18px;
      line-height: 30px;
      margin-right: 15px;
      padding-right: 2px;
  }
    }
  }
`
const QtyButton = styled.div`
  display: flex;
  border: 1px solid #000000;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  height: 35px;
  margin-right: 2em;
  button {
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 10px;
    background-color: transparent;
    max-width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
  input {
    padding: 0.4rem;
    background-color: transparent;
    border: none;
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
const TotalPrice = styled.span`
  font-family: Vollkorn SC;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #000000;
`
const ItemTitle = styled.p`
  font-family: Vollkorn SC;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
  color: #000000;
`

const TotalSpan = styled.span`
  font-family: Vollkorn SC;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  margin-bottom: 2em;
  margin-top:2em;
`
const InfoCart = styled.p`
  font-family: Vollkorn SC;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: #000000;
`
export {
  ShopCarContainer,
  ShopCarNav,
  QtyButton,
  TotalPrice,
  ItemTitle,
  TotalSpan,
  InfoCart
}
