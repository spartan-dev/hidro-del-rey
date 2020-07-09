import styled from 'styled-components'
const SellerSection = styled.div`
margin: 2em;
padding:2em;
//width: inherit;
`
const HeaderContainer = styled.div`
h1{
  font-family: Vollkorn SC;
  font-style: normal;
  font-weight: normal;
  font-size: 33px;
  line-height: 50px;
  text-align: left;
  color: #000000;
  }
`
const CardContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
width: auto;
height: auto;
@media(max-width:1024px){
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-around;
}
@media(max-width:768px){
  flex-direction: row;
  flex-wrap:wrap;
    align-items: center;

}

`
export {SellerSection, HeaderContainer, CardContainer}