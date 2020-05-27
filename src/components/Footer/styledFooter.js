import styled from "styled-components"

const Footer = styled.footer`
  width: 100vw;
  height: 191px;
  left: 0px;
  top: 2132px;
  background: #daa842;
  bottom:0;

`
const FContainer = styled.section`
  padding: 15px 65px 15px 65px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width:415px){
     padding:.70em .70em .70em .70em;
     margin-top:3em;
  }
`
const FootBox = styled.div`
  font-family: Vollkorn SC;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  a{
    color:transparent;
    
  }
/*   @media(max-width:415px){
    height:0;
  } */
`
export { Footer, FContainer, FootBox }
