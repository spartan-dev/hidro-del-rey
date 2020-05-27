import React from "react"
import styled from "styled-components"
const AdvContainer = styled.div`
  width: 657px;
  height: 182px;
  font-family: Vollkorn SC;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: #000000;
  @media(max-width:415px){
    margin-bottom: 2em;
    height: auto;

  }
`
const advertising = () => {
  return (
    <div className="uk-flex uk-flex-center">
      <AdvContainer>
        Hacemos envíos a varias partes de la República. El costo no incluye
        envío ni IVA.
      </AdvContainer>
    </div>
  )
}

export default advertising
