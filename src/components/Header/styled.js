import styled from 'styled-components'

const HeaderContainer = styled.div`
height: 100vh;
background-color:#fff;
`
const TopHeader = styled.div`
height:30%;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
div{
    width: 700px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
}
`
const BottomHeader = styled.div`
height:70%;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
div{
    width: 100%;
    height:100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
}
`
export { HeaderContainer, TopHeader, BottomHeader}