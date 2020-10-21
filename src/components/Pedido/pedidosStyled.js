import styled from 'styled-components'

const Container = styled.div`
margin-bottom:5em;
@media(max-width:411px){
width:77vw;
}
@media(max-width:375px){
width:77vw;
}
@media(max-width:768px){
width:77vw;
margin-bottom:5em;
}

`

const TextHeader = styled.p`
font-family: Vollkorn SC;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;
text-align: center;
color: #000000;
`
const FormTitle = styled.span`
font-family: Vollkorn SC;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;
text-align: center;
color: #000000;
margin-bottom:1.4em;
`
const FormSquare = styled.div`
background: #FFFFFF;
box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.24), 0px 17px 50px rgba(0, 0, 0, 0.19);
/* max-width: 10em; */
padding:2em;
width:50%;
@media(max-width:411px){
width:85%;
margin-bottom:3em;
display:flex;
flex-direction:column;
justify-content:center;
}
`
const InputForm = styled.input`
margin-bottom:1em;
padding: 1em 1em 0 1em;
border:none;
border-bottom: 2px solid #DAA842 !important;
padding-left:1.2em;
font-family:${props => props.fontchange ? "inherit": "Vollkorn" };
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
letter-spacing: -1.49012e-09px;
color: #808080;
display:${props => props.visible? "none" : null};
text-align:center;
`
const ButtonContainer = styled.div`
@media(max-width:411px){
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
`
export {TextHeader, FormTitle,FormSquare,InputForm,Container,ButtonContainer}