import styled from 'styled-components'

 const Main = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: auto;
  margin-bottom:3em;
  h1 {
    font-family: Vollkorn SC;
    color: #000000;
    font-style: normal;
    font-weight: normal;
    font-size: 33px;
    line-height: 50px;
    text-align: center;
    @media(max-width:415px){
        width:80%;
    }
  }
`
const MarcoImage = styled.div`
border-radius:4px;
width:70%;
`

export {Main, MarcoImage}