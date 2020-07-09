import styled from "styled-components"

const Footer = styled.footer`
  width: 100vw;
  height: 191px;
  left: 0px;
  top: 2132px;
  background: #daa842;
  bottom: 0;
`
const FContainer = styled.section`
  padding: 15px 65px 15px 65px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 415px) {
    padding: 0.7em 0.7em 0.7em 0.7em;
    margin-top: 3em;
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
  width: 300px;
  height:${props => props.name? "400px":"45px"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 375px) {
    width: 130vw;
  height: 80px;
  }
  a {
    color: transparent;
  }
  span {

    @media (max-width: 375px) {
      display: none;
    }
  }
  /*   @media(max-width:415px){
    height:0;
  } */
`
export { Footer, FContainer, FootBox }
