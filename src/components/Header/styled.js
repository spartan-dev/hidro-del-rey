import styled from "styled-components"

const HeaderContainer = styled.div`
  height: 50vh;
  background-color: #fafafa;
  @media(max-width:1024px) {
    height:25vh;
  }
  @media(max-width:768px){
       height:32vh;
}
`
const TopHeader = styled.div`
  height: 205px;
  background-color: #d3a341;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div {
    width: 75vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
  }
  header {
    width: 75vw;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;
    padding-right:4em;
  }
  @media(max-width:375px){
    display:none;
  }
`
const NavHeader = styled.nav`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom:2em;
  ul {
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
    }
    .active > li {
      color: #000000;
      font-weight: bold;
      padding-bottom: 10px;
      background-size: 100% 5px;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  @media(max-width:375px){
    display:none;
  }
`
const CarItemsContainer = styled.span`
    width: 26px;
    border: 2px solid black;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#000000;
`
const CarContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left:3em;
`
export { HeaderContainer, TopHeader, NavHeader, CarItemsContainer,CarContainer }
