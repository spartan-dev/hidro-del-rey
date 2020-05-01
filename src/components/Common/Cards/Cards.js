import React from "react"
import {
  ContainerCard,
  CardImage,
  CardTitle,
  CardInfo,
  CardButtonContainer,
} from "./styledCards"
import Button from "../Button"
import Img from 'gatsby-image'
const Cards = ({ title, text, bottles,image, price,showButtons }) => {
  return (
    <ContainerCard>
      <CardImage>
        <img style ={{width:"fit-content", height:"320px"}} src={image} alt={title} />
        {/* <Img fixed={image}/> */}
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardInfo>
  {bottles ? <>Caja con 24 botellas de 350ml c/u.<br /></>: null}
        {text}
      </CardInfo>
      <span>{`$ ${price} MXN`}</span>
      <CardButtonContainer>
        {showButtons ? (<form className="uk-form uk-form-stacked">
          <div className="uk-form-row">
            <div className="uk-form-controls">
              <input
                style={{ width: "110px", height: "25px", paddingLeft: "3px" }}
                type="number"
                placeholder="Pza"
              />
              <Button>agregar</Button>
            </div>
          </div>
        </form>) : (null)}
        
      </CardButtonContainer>
    </ContainerCard>
  )
}

export default Cards
