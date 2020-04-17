import styled from 'styled-components'

export default styled.button`
// background-color:#D3AE5D;
background-color: rgba(238, 220, 61, 0.87);
color:#000000;
border-radius:8px;
margin: 5px;
box-sizing: border-box;
    height:30px;
    width:120px;
    text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size:14px;
  font-family:Vollkorn;
  line-height: 9px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    &:hover{
        background-color:black;
        color:white;
        //border:1px solid #D3AE5D;
        border:1px solid rgba(238, 220, 61, 0.87);
    }
`

