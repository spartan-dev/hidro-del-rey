import styled from 'styled-components'

export default styled.button`
background-color:#D3AE5D;
color:#F6ECD4;
box-sizing: border-box;
    height: 50px;
    width: 200px;
    border: 1px solid black;
    text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 600;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    &:hover{
        background-color:black;
        color:white;
        border:1px solid #D3AE5D;
    }
`

