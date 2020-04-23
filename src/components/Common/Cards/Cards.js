import React from "react"
import {
  ContainerCard,
  CardImage,
  CardTitle,
  CardInfo,
  CardButtonContainer,
} from "./styledCards"
import Button from "../Button"
const Cards = ({ title, text, image, price }) => {
  return (
    <ContainerCard>
      <CardImage>
        <img style ={{width:"fit-content", height:"320px"}} src={image} alt="producto" />
      </CardImage>
      <CardTitle>{title}</CardTitle>
      <CardInfo>
        Caja con 24 botellas de 350ml c/u. <br />
        {text}
      </CardInfo>
      <span>{`$ ${price} MXN`}</span>
      <CardButtonContainer>
        <form className="uk-form uk-form-stacked">
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
        </form>
      </CardButtonContainer>
    </ContainerCard>
  )
}

export default Cards
