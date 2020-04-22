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
width: 100%;
height: 800px;
`
export {SellerSection, HeaderContainer, CardContainer}