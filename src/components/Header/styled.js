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
    @media(max-width:2685px){
      width:40vw;
    }
    @media(max-width:1950px){
      width:49vw;
    }
    @media(max-width:1251px){
      width:70vw;
    }
  }
  header {
    width: 75vw;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;
    padding-right:4em;
    @media(max-width:2685px){
      width:35vw;
    }
    @media(max-width:1950px){
      width:44vw;
    }
    @media(max-width:1251px){
      width:61vw;
    }
    @media(max-width:415px){
    width:90vw;
  }

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
  @media(max-width:415px){
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
    @media(max-width:415px){
      width:100%;
      justify-content: space-between;
      align-items: baseline;
    }
`

const MenuContainer = styled.section`
  width:3em !important;
  display: none;
  margin-top: 30px;
  text-align: right;
  @media (max-width: 415px) {
    display: block;
  }
`
const MenuContent = styled.section`
  ul {
    background:#d3a341;
    position: relative;
    hr{
      border-top:1px solid #000000 !important;
    }
    li {
      color: #000000;
      font-family: Vollkorn SC;;
      font-size: 20px;
      font-weight: 300;
      line-height: 22px;
      list-style: none;
      text-align: center;

    }
  }
`
export { HeaderContainer, TopHeader, NavHeader, CarItemsContainer,CarContainer, MenuContainer,MenuContent }
