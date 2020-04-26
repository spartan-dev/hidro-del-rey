import styled from 'styled-components'

const ContainerLargeCard = styled.div`
background: #FFFFFF;
margin-bottom:2.2em;
box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.24), 0px 17px 50px rgba(0, 0, 0, 0.19);
p{
  font-family: Vollkorn SC;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;
text-align: center;

color: #000000;
}
`
const LargeCardPortrait = styled.div`
padding:2em;
`
const CardContent = styled.div`
padding-left:4em;
display:flex;
justify-content:center;
align-items:center;
`

export  {ContainerLargeCard, LargeCardPortrait, CardContent}